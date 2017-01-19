import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View, 
  ListView,
  TouchableHighlight,
  StatusBar, 
  TouchableOpacity
} from 'react-native';

import Word from './Word.js';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

/*Scope of `this` keyword prevented me from using ES6 class syntax, hence React.createClass */
var Results = React.createClass({
  getInitialState() {
    let ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2 });
    return { dataSource: ds.cloneWithRows(this.props.route.passProps.dictionary) };
  },

  _renderRow(rowData) {
    let inxOfParen = rowData.term.indexOf('(');
    let term = inxOfParen === -1 ? rowData.term : rowData.term.substr(0,inxOfParen);
    let pos = inxOfParen === -1 ? '' : rowData.term.substr(inxOfParen);

    let definition;
    if (rowData.definition.substr(0, 90) === rowData.definition) {
      definition = rowData.definition;
    } else {
      let inxOfTruncationPoint = rowData.definition.substr(0,90).lastIndexOf(' ');
      definition = rowData.definition.substr(0, inxOfTruncationPoint) + ' ...';
    }

    return (
      <TouchableHighlight
        style={{borderColor: 'black', borderBottomWidth: 2}}
        onPress={() => this.props.onForward(Word, {term: term, definition: rowData.definition, pos: pos})}>
        <View style={{height: 90}}>         
          <View style={{flex: .25, flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{paddingLeft: 20, color: '#C0C0C0', fontFamily: 'Avenir', fontWeight: 'bold', fontSize: 14}}>{term}</Text>
            <Text style={{paddingRight: 20, color: '#C0C0C0', fontFamily: 'Avenir', fontWeight: 'bold', fontSize: 14}}>{pos}</Text>
          </View>
          <View style={{flex: .75, paddingTop: 8}}>
            <Text style={{paddingLeft: 20, color: '#C0C0C0', fontFamily: 'Avenir'}}>{definition}</Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  },

  render() {
    return(
      <LinearGradient style={{flex: 1}} colors={['#333333', '#2F4F4F']}>
        <StatusBar barStyle='light-content'/>
        <View style={{alignItems: 'center', marginTop: 30, flex: .15, flexDirection: 'row', justifyContent: 'space-between'}}>

          <TouchableOpacity
            onPress={() => {this.props.onBack()}}>
              <Icon name='ios-arrow-back' size={22} color='white' style={{paddingLeft: 20}}/>
          </TouchableOpacity>

          <Text style={{fontSize: 24, color: '#C0C0C0', fontFamily: 'Avenir'}}>Results</Text>

          <View />
        </View>
        <ListView
          onForward={this.props.onForward} 
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}/>
        
      </LinearGradient>

    );
  }
})

module.exports = Results;

/*export default class Results extends Component {
  constructor(props) {
    super(props);

    this.jumpToNextScene = this.jumpToNextScene.bind(this);

    let ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2 });
    this.state = { dataSource: ds.cloneWithRows(this.props.route.passProps.dictionary) };
    
  }

  jumpToNextScene() {
    debugger;
    this.props.onForward(Word, {term: term, pos: pos, definition: rowData.definition});
  }

  _renderRow(rowData) {
    let inxOfParen = rowData.term.indexOf('(');
    let term = inxOfParen === -1 ? rowData.term : rowData.term.substr(0,inxOfParen);
    let pos = inxOfParen === -1 ? '' : rowData.term.substr(inxOfParen);

    let definition;
    if (rowData.definition.substr(0, 90) === rowData.definition) {
      definition = rowData.definition;
    } else {
      let inxOfTruncationPoint = rowData.definition.substr(0,90).lastIndexOf(' ');
      definition = rowData.definition.substr(0, inxOfTruncationPoint) + ' ...';
    }

    return (
      <TouchableHighlight
        style={{borderColor: 'black', borderBottomWidth: 2}}
        onPress={this.jumpToNextScene.bind(this)}>
        <View style={{height: 75}}>         
          <View style={{flex: .25, flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{paddingLeft: 20, color: '#C0C0C0', fontFamily: 'Avenir', fontWeight: 'bold', fontSize: 14}}>{term}</Text>
            <Text style={{paddingRight: 20, color: '#C0C0C0', fontFamily: 'Avenir', fontWeight: 'bold', fontSize: 14}}>{pos}</Text>
          </View>
          <View style={{flex: .75, paddingTop: 8}}>
            <Text style={{paddingLeft: 20, color: '#C0C0C0', fontFamily: 'Avenir'}}>{definition}</Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  }

  render() {
    return(
      <LinearGradient style={{flex: 1}} colors={['#333333', '#2F4F4F']}>
        <StatusBar barStyle='light-content'/>
        <View style={{alignItems: 'center', marginTop: 30, flex: .15, flexDirection: 'row', justifyContent: 'space-between'}}>

          <TouchableOpacity
            onPress={() => {this.props.onBack()}}>
              <Icon name='ios-arrow-back' size={22} color='white' style={{paddingLeft: 20}}/>
          </TouchableOpacity>

          <Text style={{fontSize: 24, color: '#C0C0C0', fontFamily: 'Avenir'}}>Results</Text>

          <View />
        </View>
        <ListView
          onForward={this.props.onForward} 
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}/>
        
      </LinearGradient>

    );
  }
} */