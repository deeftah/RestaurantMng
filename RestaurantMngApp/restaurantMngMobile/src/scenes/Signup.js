import React, { Component } from 'react';
import {View, TextInput, Text, ScrollView, Image,Button, Animated, TouchableOpacity, Keyboard, KeyboardAvoidingView,Platform } from 'react-native';
import styles, { IMAGE_HEIGHT, IMAGE_HEIGHT_SMALL, NAVBUTTON_HEIGHT, NAVBUTTON_HEIGHT_SMALL} from '../styles/styles';
import logo from '../images/yin_yang.png';

import RoundInput from '../components/generic/RoundInput';
import Button1 from '../components/generic/Button1';
import LoginSignup from '../components/login/LoginSignup';

export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.imageHeight = new Animated.Value(IMAGE_HEIGHT);
    this.navbuttonHeight = new Animated.Value(NAVBUTTON_HEIGHT);
  }

  componentWillMount () {
   if (Platform.OS=='ios'){
    this.keyboardWillShowSub = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow);
    this.keyboardWillHideSub = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide);
   }else{
    this.keyboardWillShowSub = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow);
    this.keyboardWillHideSub = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide);
   }

  }

  componentWillUnmount() {
    this.keyboardWillShowSub.remove();
    this.keyboardWillHideSub.remove();
  }

  keyboardWillShow = (event) => {
    Animated.timing(this.imageHeight, {
      duration: event.duration,
      toValue: IMAGE_HEIGHT_SMALL,
    }).start();
  };

  keyboardWillHide = (event) => {
    Animated.timing(this.imageHeight, {
      duration: event.duration,
      toValue: IMAGE_HEIGHT,
    }).start();
  };


  keyboardDidShow = (event) => {
    Animated.timing(this.imageHeight, {
      toValue: IMAGE_HEIGHT_SMALL,
    }).start();

    Animated.timing(this.navbuttonHeight, {
      toValue: NAVBUTTON_HEIGHT_SMALL,
    }).start();
  };

  keyboardDidHide = (event) => {
    Animated.timing(this.imageHeight, {
      toValue: IMAGE_HEIGHT,
    }).start();

    Animated.timing(this.navbuttonHeight, {
      toValue: NAVBUTTON_HEIGHT,
    }).start();
  };

  render() {
    return (
      <View style={{flex:1,backgroundColor:'#4c69a5',alignItems:'center'}}>
        <Animated.Image source={logo} style={[styles.logo, { height: this.imageHeight }]} />
        <ScrollView 
          style={{flex:1}}
          keyboardShouldPersistTaps='handled'
        >
          <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
          >
            <TextInput
              placeholder="Email"
              style={styles.input}
            />
            <TextInput
              placeholder="Username"
              style={styles.input}
            />
            <TextInput
              placeholder="Password"
              style={styles.input}
            />
            <TextInput
              placeholder="Confirm Password"
              style={styles.input}
            />
            <TouchableOpacity
              style={styles.button1}
              onPress={this.onPress}
            >
              <Text style={styles.button1Txt} > Sign Up </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={this.onPress}
              onPress={() => this.props.navigation.navigate('Login')}
            >
              <Text style={[styles.button1Txt, {paddingVertical: 10}]} >Go To Log In</Text>
            </TouchableOpacity>

          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    );
  }
};
