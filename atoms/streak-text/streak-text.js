import React, {Component} from 'react';
import { StyleSheet, Text} from 'react-native';


let streaks  = {
  Good: 'Gut',
  VeryGood: 'Sehr Gut!',
  Excellent: 'Wahnsinn!',
  Godlike: 'Unglaublich!!!'
};

class StreakText extends Component {
  constructor(props) {
    super(props)
  }

  updateTextColor = () => {
    if (this.props.score > 0 && this.props.score <= 3 ) {
      return {color: '#00600f'};
    } else if (this.props.score > 3 && this.props.score <= 8 ) {
      return {color: '#fdd835'};
    } else if (this.props.score > 6 && this.props.score <= 14 ) {
      return {color: '#ef6c00'};
    } else if (this.props.score > 14 ) {
      return {color: '#ff3d00'};
    } else {
      return '';
    }
  }

  showStreakInfo = () => {
    if (this.props.score > 0 && this.props.score <= 3 ) {
      return streaks.Good;
    } else if (this.props.score > 3 && this.props.score <= 8 ) {
      return streaks.VeryGood;
    } else if (this.props.score > 6 && this.props.score <= 14 ) {
      return streaks.Excellent;
    } else if (this.props.score > 14 ) {
      return streaks.Godlike;
    } else {
      return '';
    }
  }


  render() {
    return (
      <Text
        style={[styles.streak, this.updateTextColor()]}
      >{this.showStreakInfo()}
      </Text>
    )
  }
}

const styles = StyleSheet.create({

  streak: {
    fontSize: 50,
    textAlign: 'center',
    margin: 10,
  },
});

export default StreakText;

