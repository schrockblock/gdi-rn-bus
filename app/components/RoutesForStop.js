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
import { Container, Content, Body, Button, Header, Icon, Left, List, ListItem, Right, Title } from 'native-base';
import API from '../lib/API.js';
import { Actions } from 'react-native-router-flux';

export default class RoutesForStop extends Component {
  constructor(props) {
    super(props)

    this.state = {stop: props.stop, routes: props.stop.routes}


  }

  componentDidMount() {
    this.getRoutesForStop(this.state.stop);
  }

  render() {
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
            <List dataArray={this.state.routes} renderRow={route => 
              <ListItem onPress={() => Actions.busMap({stop: this.state.stop, route: route})} >
                <Body>
                  <Text>{route.name}</Text>
                </Body>
                <Right>
                  <Text>{route.prediction}</Text>
                </Right>
              </ListItem>
            } />
          </View>
        </Content>
      </Container>
    );
  }

  getRoutesForStop(stop){
    API.getStopRoutes(stop, routes => {
      this.setState({routes: routes});
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
