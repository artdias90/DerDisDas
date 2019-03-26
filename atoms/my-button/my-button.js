import React, {Component} from 'react';
import { StyleSheet, Text} from 'react-native';

class MyButton extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Text
      style={styles.buttonStyles}
    >{this.props.title}
    </Text>
    )
  }
}

const styles = StyleSheet.create({
  buttonStyles: {
    color: '#fff',
    width: '90%',
    backgroundColor: 'rgba(0,0,0,0)'
  },

});

export default MyButton;

