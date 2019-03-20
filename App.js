/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import MyButton from './atoms/button.js';
var customData = require('./words.json');
import Button from 'react-native-button';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      currIndex: Math.floor(Math.random() * Math.floor(customData.length-1)),
      articles: customData
    }
  }

  updateText = () => {
    this.setState({currIndex: Math.floor(Math.random() * Math.floor(this.state.articles.length-1))})
  }

  evaluate = (arg) => {
    let currentAnswer = Object.keys(this.state.articles[this.state.currIndex]);
    if (currentAnswer == arg) {
      this.setState({score: this.state.score + 1})
    } else {
      this.setState({score: 0})
    }
    this.updateText();
  }

  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.score}>{this.state.score}</Text>
        <Text style={styles.welcome}>{Object.values(this.state.articles[this.state.currIndex])}</Text>
        <MyButton title="Der" onPress={() => this.evaluate('Der')} />
        <MyButton title="Die" onPress={() => this.evaluate('Die')} />
        <MyButton title="Das" onPress={() => this.evaluate('Das')} />
        <Button containerStyle={styles.containerStyle} onPress={this.updateText}>Skip</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  score: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },

  containerStyle: {
    margin: 20,
    padding:10,
    height:45,
    width: '90%',
    overflow:'hidden',
    borderRadius:4,
    backgroundColor: '#b1bfca'
  }
});
