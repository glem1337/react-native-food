import React from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ResultsDetail from 'src/views/shared/ResultsDetail';
import * as S from './styled';


const ResultsList = ({ title, results }) => {
  const navigation = useNavigation();

  if (!results.length) {
    return null;
  }

  return (
    <S.View>
      <S.Text large={true}>{title}</S.Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('ResultsShow', {
                  id: item.id,
                  title: item.name,
                })
              }
            >
              <ResultsDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </S.View>
  );
};

export default ResultsList;
