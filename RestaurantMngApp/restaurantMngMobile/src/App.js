import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import Login from './scenes/Login';
import Signup from './scenes/Signup';

import router from './NavRouter';

export default class App extends Component {
  render() {
    return (
      <NavStack /> );
  }
}


const NavStack = StackNavigator (
    {
        Login: {
        screen: Login,
        },
        Signup: {
        screen: Signup,
        },
    },
  {
    initialRouteName: 'Login',
  }
);