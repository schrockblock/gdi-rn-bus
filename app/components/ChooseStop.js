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
import { Container, Content, Body, Button, Header, Left, List, ListItem, Right, Title } from 'native-base';
import API from '../lib/API.js';
import { Actions } from 'react-native-router-flux';

export default class ChooseStop extends Component {
  constructor(props) {
    super(props)

    this.state = {stops: [],
                  initialPosition: { latitude: 40.7380044, longitude: -73.9917799 }}
  }

  componentDidMount() {
    this.getStopsForLocation(this.state.initialPosition);
  }

  render() {
    return (
      <Container>
        <Header >
          <Body>
            <Title>Choose a stop</Title>
          </Body>
        </Header>
        <Content contentContainerStyle={{flex: 1}}>
          <View style={{flex: 1}}>
            <List dataArray={this.state.stops} renderRow={stop => 
              <ListItem onPress={() => Actions.routesForStop({stop: stop})} >
                <Text>{stop.name}</Text>
              </ListItem>
            } />
          </View>
        </Content>
      </Container>
    );
  }

  getStopsForLocation(location){
    API.getStops(location, stops => {
      this.setState({stops: stops});
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
