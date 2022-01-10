import React, { useEffect, useState } from 'react';
import NetInfo from "@react-native-community/netinfo";
import { Text, ScrollView, Platform, TouchableWithoutFeedback, Keyboard, Alert, NativeModules } from 'react-native';

import useResults from 'src/hooks/useResults';
import SearchBar from 'src/views/shared/SearchBar';
import ResultsList from 'src/views/shared/ResultsList';

import * as S from './styled';

const SearchScreen = () => {
	const [term, setTerm] = useState('');
	const [searchApi, results, errorMessage] = useResults();

	const filterResultsByPrice = (price) => {
		return results.filter((result) => {
			return result.price === price;
		});
	};

	useEffect(() => {
		const unsubscribe = NetInfo.addEventListener(state => {
			console.log("Connection type", state.type);
			console.log("Is connected?", state.isInternetReachable);

			Alert.alert(
				'Welcome',
				state.isInternetReachable ?
					'You are connected' :
					'You aren`t connected',
				[
					{ text: 'OK', onPress: () => {
							console.log('OK Pressed');
							NativeModules.RNHello.addEvent('name', 'location')
						}
					},
				]
			);
		});

		return () => {
			unsubscribe();
		}
	}, [])

	return (
		<S.KeyboardAvoidingView
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
		>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<S.View>
					<SearchBar
						term={term}
						onTermChange={setTerm}
						onTermSubmit={() => searchApi(term)}
					/>
					{errorMessage ? <Text>{errorMessage}</Text> : null}
					<ScrollView>
						<ResultsList
							results={filterResultsByPrice('$')}
							title="Cost Effective"
						/>
						<ResultsList results={filterResultsByPrice('$$')} title="Bit Pricier"/>
						<ResultsList
							results={filterResultsByPrice('$$$')}
							title="Big Spender"
						/>
						<ResultsList
							results={filterResultsByPrice('$$$$')}
							title="Big Spender+"
						/>
					</ScrollView>
				</S.View>
			</TouchableWithoutFeedback>
		</S.KeyboardAvoidingView>
	);
};

export default SearchScreen;
