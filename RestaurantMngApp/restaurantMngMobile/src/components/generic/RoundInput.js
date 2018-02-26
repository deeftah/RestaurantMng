import React, {Component} from 'react';
import {StyleSheet, TextInput } from 'react-native';

export default class RoundInput extends Component {
  render() {
    return (
          <TextInput 
            style={styles.txtInput}
            underlineColorAndroid="transparent"
            placeholder={this.props.plcHolder}
            secureTextEntry={this.props.passwordFlag}
            keyboardType = {this.props.typeKeyboard}
            placeholderTextColor='white'
          />
    );
  }
}

RoundInput.defaultProps = {
  passwordFlag: false,
  typeKeyboard: 'default'
};

const styles = StyleSheet.create({
  txtInput: {
    width: 250,
    backgroundColor: 'rgba(255,255,255, 0.3)',
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 19,
    marginVertical: 10
  }
});