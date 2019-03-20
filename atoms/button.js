import React, {Component} from 'react';
import { StyleSheet} from 'react-native';
import Button from 'react-native-button';

class MyButton extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Button
        style={styles.buttonStyles}
        containerStyle={styles.containerStyle}
        onPress={this.props.onPress}
      >{this.props.title}
      </Button>
    )
  }
}

const styles = StyleSheet.create({
  buttonStyles: {
    color: '#fff',
  },

  containerStyle: {
    margin: 20,
    padding:10,
    height:45,
    width: '90%',
    overflow:'hidden',
    borderRadius:4,
    backgroundColor: '#001970'
  }
});

export default MyButton;

