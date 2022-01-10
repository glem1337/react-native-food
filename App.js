import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {request, PERMISSIONS} from 'react-native-permissions';

import SearchScreen from 'src/views/SearchScreen';
import ResultsShowScreen from 'src/views/ResultsShowScreen';

const Stack = createNativeStackNavigator();

export default () => {
	useEffect(() => {
		request(Platform.OS === 'ios' ?
			PERMISSIONS.IOS.CAMERA :
			PERMISSIONS.ANDROID.CAMERA
		).then((result) => {
				console.log(result);
		});
	}, []);

	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerStyle: {
						backgroundColor: '#f4511e',
					},
					headerTintColor: '#fff',
					headerTitleStyle: {
						fontWeight: 'bold',
					},
				}}
			>
				<Stack.Screen
					name="Search"
					component={SearchScreen}
					options={{
						title: 'Home',
					}}
				/>
				<Stack.Screen
					name="ResultsShow"
					component={ResultsShowScreen}
					options={({ route }) => ({
						title: route.params.title,
						headerStyle: {
							backgroundColor: '#000',
						},
					})}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
};
