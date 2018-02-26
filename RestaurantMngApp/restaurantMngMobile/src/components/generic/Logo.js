import React, {Component} from 'react';
import {View, StyleSheet, Image, Text, KeyboardAvoidingView} from 'react-native';


export default class Logo extends Component {
    render() {
        return (
            <View style={Styles.container}>
                <Image 
                    style={Styles.logo} 
                    source={require('../../images/yin_yang.png')} 
                ></Image>
                <Text style={Styles.title}>{this.props.restaurantName}</Text>
            </View>
        );
    }
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 100, 
        height: 100
    },
    title: {
        fontSize: 24,
        color: 'white'
    }
});