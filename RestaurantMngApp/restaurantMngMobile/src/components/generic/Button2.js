import React, {Component} from 'react';
import {TouchableNativeFeedback, View, Text, StyleSheet} from 'react-native';

export default class Button2 extends Component {
  render() {
    return (
        <TouchableNativeFeedback
            onPress={this._onPressButton}
            background={TouchableNativeFeedback.SelectableBackground()}
        >
            <View style={styles.button}>
                <Text style={styles.buttonTxt}>{this.props.buttonName}</Text>
            </View>
        </TouchableNativeFeedback>
    );
  }
}

const styles = StyleSheet.create({
    button: {
        width: 150, 
        height: 100, 
        backgroundColor: 'red'
    },
    buttonTxt: {
        margin: 30
    }
});