import { Feather } from '@expo/vector-icons';
import styled from 'styled-components/native';

// should be in separate file
const View = styled.View`
  background-color: #f0eeee;
  height: 50px;
  border-radius: 5px;
  margin: 10px 15px 5px;
  flex-direction: row;
`;

const TextInput = styled.TextInput`
  flex: 1;
  font-size: 18px;
`;

const Icon = styled(Feather)`
  font-size: 35px;
  align-self: center;
  margin: 0 15px;
`;

export { View, TextInput, Icon };
