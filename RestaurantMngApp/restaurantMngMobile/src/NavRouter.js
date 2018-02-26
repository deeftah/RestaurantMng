import { StackNavigator } from 'react-navigation';

import Login from './scenes/Login';
import Signup from './scenes/Signup';

export default StackNavigator (
    {
        LoginS: {
        screen: Login,
        },
        SignupS: {
        screen: Signup,
        },
    },
  {
    initialRouteName: 'LoginS',
  }
);