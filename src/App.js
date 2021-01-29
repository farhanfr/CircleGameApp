import React, {Component} from 'react';
import {Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import {Route} from './routes'

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Route/>
      </NavigationContainer>
    );
  }
}

export default App;
