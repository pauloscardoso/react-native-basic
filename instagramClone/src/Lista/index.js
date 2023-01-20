import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

import {
  Container,
  ContainerPerfil,
  NameUser,
  ContainerBtn,
  CommentBtn,
  SendBtn,
  ContainerFooter,
  NameFooter,
  DescFooter,
  ImgProfile,
} from "./styles";

class Lista extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: this.props.data,
    };
    this.carregaIcone = this.carregaIcone.bind(this);
    this.like = this.like.bind(this);
    this.mostraLikes = this.mostraLikes.bind(this);
  }

  carregaIcone(likeada) {
    return likeada ? require("../img/likeada.png") : require("../img/like.png");
  }

  like() {
    let feed = this.state.feed;

    if (feed.likeada === true) {
      this.setState({
        feed: {
          ...feed,
          likeada: false,
          likers: feed.likers - 1,
        },
      });
    } else {
      this.setState({
        feed: {
          ...feed,
          likeada: true,
          likers: feed.likers + 1,
        },
      });
    }
  }

  mostraLikes(Likers) {
    let feed = this.state.feed;

    if (feed.likers <= 0) {
      return;
    }

    return (
      <NameFooter
        style={{
          fontWeight: "bold",
        }}
      >
        {feed.likers} {feed.likers > 1 ? "curtidas" : "curtida"}
      </NameFooter>
    );
  }

  render() {
    return (
      <Container>
        <ContainerPerfil>
          <ImgProfile
            source={{ uri: this.state.feed.imgperfil }}
            style={{ borderRadius: 25, width: 30, height: 30 }}
          />
          <NameUser>{this.state.feed.nome}</NameUser>
        </ContainerPerfil>

        <ImgProfile
          resizeMode="cover"
          style={{ flex: 1, height: 300, alignItems: "center" }}
          source={{ uri: this.state.feed.imgPublicacao }}
        />

        <ContainerBtn>
          <TouchableOpacity onPress={this.like}>
            <ImgProfile
              source={this.carregaIcone(this.state.feed.likeada)}
              style={{ width: 25, height: 25 }}
            />
          </TouchableOpacity>
          <CommentBtn>
            <ImgProfile
              source={require("../img/comment.png")}
              style={{ width: 25, height: 25 }}
            />
          </CommentBtn>
          <SendBtn>
            <ImgProfile
              source={require("../img/send.png")}
              style={{ width: 25, height: 25 }}
            />
          </SendBtn>
        </ContainerBtn>

        {this.mostraLikes(this.state.feed.likers)}

        <ContainerFooter>
          <NameFooter>{this.state.feed.nome}</NameFooter>

          <DescFooter>{this.state.feed.descricao}</DescFooter>
        </ContainerFooter>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  iconeLike: {
    width: 25,
    height: 25,
  },
  likes: {
    fontWeight: "bold",
    marginLeft: 6,
  },
});

export default Lista;
