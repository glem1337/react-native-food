import styled from 'styled-components/native';
import { Pressable } from 'react-native';

const Overlay = styled.View`
  margin: 20px;
  background-color: #fff;
  border-radius: 20px;
  padding: 35px;
  align-items: center;
`;

const View = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 22px;
`;

const Button = styled(Pressable)`
	background-color: #F194FF;
	padding: 10px;
	border-radius: 20px;
	margin-top: 20px;
`;

const Text = styled.Text`
	color: #fff;
  font-weight: bold;
	text-align: center;
`;

export { Overlay, View, Button, Text };
