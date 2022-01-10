import React, { useState, useEffect } from 'react';
import { View, FlatList, StatusBar } from 'react-native';
import yelp from 'src/api/yelp';

import Modal from 'src/views/shared/Modal';
import * as S from './styled';

const ResultsShowScreen = ({ route }) => {
  const [result, setResult] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const { id } = route.params;

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
    setModalVisible(true);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View>
      <StatusBar barStyle="light-content" />
      <S.Text>{result.name}</S.Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <S.Image source={{ uri: item }} />;
        }}
      />
      <Modal visible={modalVisible} setVisible={setModalVisible} />
    </View>
  );
};

export default ResultsShowScreen;
