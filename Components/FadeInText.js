import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Animated
} from 'react-native';

export default class FadeInView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0), // init opacity 0
    };
  }

  componentDidMount() {
    Animated.timing(this.state.fadeAnim, {toValue: 1}).start();
  }

  render() {
    return (
      <Animated.Text style={[{opacity: this.state.fadeAnim}, this.props.styles]}>
        {this.props.text}
      </Animated.Text>
    );
  }
}