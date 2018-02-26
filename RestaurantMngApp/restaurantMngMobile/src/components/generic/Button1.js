import React, {Component} from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';

export default class Button1 extends Component {
  render() {
    return (
        <TouchableOpacity
          style={styles.button}
          onPress={this.onPress}
        >
          <Text style={styles.buttonTxt} > 
            {this.props.buttonName} 
          </Text>
       </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
    button: {
      width: 200,
      backgroundColor: 'rgba(255,255,255, .3)',
      borderRadius:24,
      margin: 10,
      padding: 15
    },
    buttonTxt: {
        fontSize: 19,
        fontWeight: '500',
        color: '#fff',
        textAlign: 'center'
    }
});