/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Container, Content, Body, Button, Header, Icon, Left, Right, Title } from 'native-base';
import API from '../lib/API.js';
import { Actions } from 'react-native-router-flux';
import MapView from 'react-native-maps';

export default class BusMap extends Component {
  constructor(props) {
    super(props)

    this.state = {stop: props.stop, route: props.route,
                  initialPosition: { latitude: 40.7380044, longitude: -73.9917799 }}

    
  }

  componentDidMount() {
    this.getRoutesForStop(this.state.stop);
  }

  render() {
    const initialRegion = {
            latitude: this.state.initialPosition.latitude,
            longitude: this.state.initialPosition.longitude,
            latitudeDelta: 0.2,
            longitudeDelta: 0.2
          };
    return (
      <Container>
        <Header >
          <Left>
            <Button transparent onPress={() => Actions.pop()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>{this.state.stop.name}</Title>
          </Body>
          <Right />
        </Header>
        <Content contentContainerStyle={{flex: 1}}>
          <View style={{flex: 1}}>
            <MapView style={styles.map} initialRegion={initialRegion} >
              <MapView.Marker coordinate={this.state.stop.coords} />
              <MapView.Marker coordinate={this.state.route.coords} />
            </MapView>
          </View>
        </Content>
      </Container>
    );
  }

  getRoutesForStop(stop){
    API.getStopRoutes(stop, routes => {
      // this.setState({routes: routes});
    }, error => alert(JSON.stringify(error)));
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  }
});
