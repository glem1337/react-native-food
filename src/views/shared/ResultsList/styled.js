import styled from 'styled-components/native';

const View = styled.View`
  margin-bottom: 10px;
`;

const Text = styled.Text`
  font-size: ${({ large }) => (large ? 24 : 18)}px;
  font-weight: bold;
  margin-left: 15px;
  margin-bottom: 5px;
`;

export { View, Text };
