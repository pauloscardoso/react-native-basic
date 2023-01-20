import { Image } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View``;
export const ContainerPerfil = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding: 8px;
`;
export const ImgProfile = styled.Image``;

export const NameUser = styled.Text`
  font-size: 17px;
  font-weight: bold;
  align-items: flex-end;
  padding-left: 10px;
  color: #000;
`;
export const ContainerBtn = styled.View`
  flex-direction: row;
  padding: 10px;
`;
export const CommentBtn = styled.TouchableOpacity`
  padding-left: 15px;
`;
export const SendBtn = styled.TouchableOpacity`
  padding-left: 15px;
`;
export const ContainerFooter = styled.View`
  flex-direction: row;
  align-items: center;
  padding-bottom: 15px;
`;
export const NameFooter = styled.Text`
  font-size: 15px;
  font-weight: bold;
  padding-left: 8px;
  color: #000;
`;
export const DescFooter = styled.Text`
  font-size: 15px;
  padding-left: 5px;
  color: #000;
`;
