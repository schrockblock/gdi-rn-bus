/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';
import { Router, Scene, Actions } from 'react-native-router-flux';
import ChooseStop from './components/ChooseStop.js';
import RoutesForStop from './components/RoutesForStop.js';
import BusMap from './components/BusMap.js';

export default class BusLocations extends Component {
  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar={true}>
          <Scene key="chooseStop" component={ChooseStop} initial={true} />
          <Scene key="routesForStop" component={RoutesForStop} />
          <Scene key="busMap" component={BusMap} />
        </Scene>
      </Router>
    );
  }
}

AppRegistry.registerComponent('BusLocations', () => BusLocations);
