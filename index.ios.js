import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View, 
  TextInput,
  Navigator,
} from 'react-native';

import Word from './Components/Word.js';
import Search from './Components/Search.js';

export default class Etym extends Component {
  constructor(props) {
    super(props);
  }

  _renderScene(route, navigator) {
    let Comp = route.component;
    return (
      <Comp
        route={route}
        navigator={navigator}
        onForward={(newComponent, passProps) => {
          let nextIndex = route.index + 1
          navigator.push({title: 'Scene ' + nextIndex, 
                          index: nextIndex, 
                          component: newComponent,
                          passProps: passProps}); 
        }}
        onBack={() => {
          if (route.index > 0) navigator.pop();
        }} />
    );
  }


  render() {
    return (
      <Navigator
        style={{backgroundColor: 'white'}}
        initialRoute={ {title: 'Search', index:0, component: Search, passProps: {}} }
        renderScene={this._renderScene}
        configureScene={(route, routeStack) => Navigator.SceneConfigs.HorizontalSwipeJump} />
    );
  }
}


AppRegistry.registerComponent('Etym', () => Etym);
