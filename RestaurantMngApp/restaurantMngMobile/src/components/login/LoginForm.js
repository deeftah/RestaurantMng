import React, {Component} from 'react';
import {KeyboardAvoidingView, StyleSheet, TouchableOpacity, Text} from 'react-native';

import RoundInput from '../generic/RoundInput';
import Button1 from '../generic/Button1';

export default class LoginForm extends Component {
    render() {
        return (
            <KeyboardAvoidingView style={styles.container}>
                <RoundInput
                    plcHolder='Email'
                    typeKeyboard='email-address'
                    onSubmitEdit = {()=> this.password.focus()}
                />
                <RoundInput
                    plcHolder = 'Password'
                    passwordFlag = {true}
                    ref = {(input)=> this.password = input}
                />
                <Button1 buttonName='Login' />

                <TouchableOpacity style={styles.fpContainer}> 
                    <Text style={styles.fpButton}>Forgot Password?</Text>
                </TouchableOpacity>

            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    fpContainer: {
        alignItems:'flex-end',
        justifyContent :'center',
        padding: 15,
        flexDirection:'row'

    },
    fpButton: {
        color:'#ffffff',
        fontSize:17,
        fontWeight:'500'
    }
});