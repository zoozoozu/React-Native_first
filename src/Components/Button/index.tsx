import React from 'react';
import Styled from 'styled-components/native';

const StyleButton = Styled.TouchableOpacity`
  width: 100%;
  height: 40px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  border: 1px;
  background-color: #ffcc00;
  border-color: #ffcc00;
`;
const Label = Styled.Text`
  color: #000000;
`;

interface Props {
  label: string;
  style?: Object;
  onPress?: () => void;
}

const Button = ({label, style, onPress}: Props) => {
  return (
    <StyleButton style={style} onPress={onPress}>
      <Label>{label}</Label>
    </StyleButton>
  );
};

export default Button;