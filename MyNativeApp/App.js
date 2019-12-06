import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Home from './App/component/home';
import Login from './App/component/login';
import RootNavigator from './App/rRootNavigator/navigator'

class App extends Component {
  render() {
    return <RootNavigator />
  }
}
export default App;