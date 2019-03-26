/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableWithoutFeedback, Animated} from 'react-native';
import MyButton from './atoms/my-button/my-button';
import StreakText from './atoms/streak-text/streak-text';
var customData = require('./words.json');
import Button from 'react-native-button';


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

  componentWillMount() {
    this.animatedValueDer = new Animated.Value(0);
    this.animatedValueDie = new Animated.Value(0);
    this.animatedValueDas = new Animated.Value(0);
    this.animatedStreak = new Animated.Value(0);
  }


  showCorrectAnswer(answer) {
    return new Promise((resolve, reject) => {
      switch(answer) {
        case 'Der':
          this.animatedValueDer.setValue(0);
          Animated.timing(this.animatedValueDer, {
            toValue: 300,
            duration: 1000
          }).start(() => {
            resolve()
          });
          break;
        case 'Die':
          this.animatedValueDie.setValue(0);
          Animated.timing(this.animatedValueDie, {
            toValue: 300,
            duration: 1000
          }).start(() => {
            resolve()
          });
          break;
        case 'Das':
          this.animatedValueDas.setValue(0);
          Animated.timing(this.animatedValueDas, {
            toValue: 300,
            duration: 1000
          }).start(() => {
            resolve()
          });
          break;
      }
    })


  }

  updateText = () => {
    this.setState({currIndex: Math.floor(Math.random() * Math.floor(this.state.articles.length-1))})
  }

  evaluate = (arg) => {
    let currentAnswer = Object.keys(this.state.articles[this.state.currIndex])[0];
    if (currentAnswer == arg) {
      this.setState({score: this.state.score + 1})
      this.updateText()
    } else {
      this.showCorrectAnswer(currentAnswer).then(r => {
        this.setState({score: 0})
        this.updateText()
      });
    }
  }

  render() {
    const interpolateColorDer = this.animatedValueDer.interpolate({
      inputRange: [0, 150, 300],
      outputRange: ['#001970', 'red', '#001970']
    });

    const interpolateColorDie = this.animatedValueDie.interpolate({
      inputRange: [0, 150, 300],
      outputRange: ['#001970', 'red', '#001970']
    });

    const interpolateColorDas = this.animatedValueDas.interpolate({
      inputRange: [0, 150, 300],
      outputRange: ['#001970', 'red', '#001970']
    });

    const animatedStyleDer = {
      backgroundColor: interpolateColorDer
    };

    const animatedStyleDie = {
      backgroundColor: interpolateColorDie
    };

    const animatedStyleDas = {
      backgroundColor: interpolateColorDas
    };

    return (
      <View style={styles.container}>

          <StreakText score={this.state.score} />

          <Animated.View style={{opacity: this.animatedStreak}}>
            <Text style={styles.score}>{this.state.score}</Text>
          </Animated.View>

          <Text style={styles.welcome}>{Object.values(this.state.articles[this.state.currIndex])}</Text>

        <TouchableWithoutFeedback onPressIn={() => this.evaluate('Der')}>
          <Animated.View style={[styles.buttonContainer, animatedStyleDer]}>
            <MyButton title="Der"/>
          </Animated.View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPressIn={() => this.evaluate('Die')}>
          <Animated.View style={[styles.buttonContainer, animatedStyleDie]}>
            <MyButton title="Die"/>
          </Animated.View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPressIn={() => this.evaluate('Das')}>
          <Animated.View style={[styles.buttonContainer, animatedStyleDas]}>
            <MyButton title="Das" />
          </Animated.View>
        </TouchableWithoutFeedback>

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
    overflow:'hidden',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
  },

  buttonContainer: {
    margin: 40,
    padding: 10,
    textAlign: 'center',
    width: '90%',
    overflow:'hidden',
    borderRadius:4,
    backgroundColor: '#001970',
    width: '90%',
    margin: 10
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
