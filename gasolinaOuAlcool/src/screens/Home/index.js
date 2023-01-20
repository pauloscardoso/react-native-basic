import React, { useState } from "react";
import {
  Container,
  ContainerInput,
  Description,
  DescriptionInput,
  Image,
  Input,
  Btn,
  ContainerBtn,
  DescriptionBtn,
} from "./styles";

import { Modal } from "react-native";

function Home() {
  return (
    <Container>
      <Image source={require("../../assets/logo.png")} />
      <Description>Qual melhor opção?</Description>
      <ContainerInput>
        <DescriptionInput>Álcool (preço por litro):</DescriptionInput>
        <Input />
        <DescriptionInput>Gasolina (preço por litro):</DescriptionInput>
        <Input />
      </ContainerInput>
      <ContainerBtn>
        <Btn
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: 300,
            height: 40,
            backgroundColor: "#f23535",
            borderRadius: 4,
          }}
        >
          <DescriptionBtn>Calcular</DescriptionBtn>
        </Btn>
      </ContainerBtn>
    </Container>
  );
}

export default Home;
