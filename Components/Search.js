import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View, 
  TextInput,
  TouchableHighlight,
  StatusBar, 
  ActivityIndicator,
  TouchableWithoutFeedback
} from 'react-native';

var DismissKeyboard = require('dismissKeyboard');

import FadeInText from './FadeInText.js';
import LinearGradient from 'react-native-linear-gradient';
import Results from './Results.js'

export default class Search extends Component {
  constructor(props) {
      super(props);
      this.state = {searchTerm: '', searching: false};
      this.fetchEtymology = this.fetchEtymology.bind(this);
  }

  fetchEtymology() {
    if (this.state.searchTerm !== '') {
      this.setState({searching: true});
      var endpoint = 'https://etymonline-api.herokuapp.com/' + this.state.searchTerm;

      fetch(endpoint)
        .then((response) => response.json())
        .then((responseJSON) => {
          this.setState({searching: false})
          this.props.onForward(Results, responseJSON);
        })
        .catch((error) => { console.warn(error); });
    }  
  }

  render() {

    return (
      <TouchableWithoutFeedback onPress={() => DismissKeyboard()}>
        <LinearGradient
          style={{flex:1}}
          colors={['#333333', '#689F63']}>
          <View style={{flex: .30, justifyContent: 'center', alignItems: 'center'}}>
            <StatusBar barStyle='light-content' />
            <FadeInText text={"Online Etymology Dictionary"} styles={{fontSize: 24, color: '#C0C0C0', fontFamily: 'Avenir'}}/>
            <FadeInText text={"every word has a story to tell"} styles={{fontSize:14, color: '#C0C0C0', fontFamily: 'Avenir'}}/>
          </View>
          <View style={{flex: .70}}>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <TextInput
                style={{flex: 5, height: 40, backgroundColor: 'white', borderRadius: 4}}
                onChangeText={(text) => {this.setState({searchTerm: text})} }
                value={this.state.text}>
              </TextInput>
              <TouchableHighlight 
                style={{borderColor: 'black', height: 40, borderRadius:4, borderWidth: 2, flex:1, justifyContent: 'center', alignItems:'center'}}
                onPress={this.fetchEtymology}>
                  <Text style={{color: '#C0C0C0', fontFamily: 'Avenir'}}>Go!</Text>
              </TouchableHighlight>
            </View>
            <View style={{flex: 7, justifyContent:'center', alignItems: 'center'}}>
              <ActivityIndicator animating={this.state.searching} size="large" color="#2F4F4F"/>
            </View>
          </View>
        </LinearGradient>
      </TouchableWithoutFeedback>  
    );
  }
}
