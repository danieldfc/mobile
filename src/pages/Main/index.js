import React, { Component } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

import api from "../../services/api";

import logo from "../../assets/logo.png";

export default class Main extends Component {
  state = {
    newBox: {}
  };

  async componentDidMount() {
    const box = await AsyncStorage.getItem("@RocketBox:box");

    if (box) {
      this.porps.navigation.navigate("Box");
    }
  }

  handleSignIn = async () => {
    const response = await api.post("boxes", {
      title: this.state.newBox
    });

    await AsyncStorage.setItem("@RocketBox:box", response.data._id);

    this.porps.navigation.navigate("Box");
  };

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={logo} />
        <TextInput
          style={styles.input}
          placeholder="Crie uma box"
          placeholderTextColor="#999"
          autoCapitalize={false}
          underlineColorAndroid="transparent"
          value={this.state.newBox}
          onChangeText={text => this.setState({ newBox: text })}
        />
        <TouchableOpacity style={styles.button} onPress={this.handleSignIn}>
          <Text style={styles.buttonText}>Criar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
