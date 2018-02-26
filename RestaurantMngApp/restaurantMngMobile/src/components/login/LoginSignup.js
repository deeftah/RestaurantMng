import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Button1 from '../generic/Button1';

export default class LoginSignup extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Button1 buttonName='Create Account' />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10
    }
});