import styled from 'styled-components/native';

const View = styled.View`
  margin-left: 15px;
`;

const Image = styled.Image`
  width: 250px;
  height: 120px;
  border-radius: 4px;
  margin-bottom: 5px;
`;

const Text = styled.Text`
  font-weight: ${(props) => (props.isBold ? 'bold' : 'normal')};
`;

export { View, Image, Text };
