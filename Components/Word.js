import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StatusBar, 
  ScrollView,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';


export default class Word extends Component {
    constructor(props) {
      super(props);
      debugger;
    }

    render() {
        return(
          <LinearGradient
            style={{flex: 1}}
            colors={['#333333', '#2F4F4F']}>
            <StatusBar barStyle='light-content' />

            

            <View style={{flex: 1, alignItems: 'center', marginTop: 30, flexDirection: 'row'}}>

              <View style={{flex: 1}}>
                <TouchableOpacity
                  onPress={() => {this.props.onBack()}}>
                    <Icon name='ios-arrow-back' size={22} color='white' style={{paddingLeft: 20}}/>
                </TouchableOpacity>
              </View>

              <View style={{flex: 2, alignItems: 'center'}}>
                <Text style={{fontSize: 24, color: '#C0C0C0', fontFamily: 'Avenir', marginBottom: -8}}>{this.props.route.passProps.term}</Text>
                <Text style={{fontSize: 16, color: '#C0C0C0', fontFamily: 'Avenir'}}>{this.props.route.passProps.pos}</Text>
              </View>

              <View style={{flex: 1}}/>
            </View>

            <View style={{flex: 6, alignItems: 'center'}}>
              <ScrollView style={{backgroundColor: 'white', borderRadius: 4, marginTop: 20, width: 270, flex: 2}}>
                <Text style={{fontFamily: 'Avenir'}}>{this.props.route.passProps.definition}</Text>
              </ScrollView>
              <View style={{flex:.2}}/>
            </View>
            
          </LinearGradient>
          
        );
    }
}

/*

<View style={{flex: 1, borderWidth: 4, borderColor: 'black', backgroundColor: 'white', borderRadius: 4, width: 270, marginTop: 20}}>
                  <Text style={{fontSize: 20, fontFamily: 'Avenir'}}>Definition</Text>
                </View>
                <View stlye={{flex: 1, borderColor: 'gold', borderWidth: 2, backgroundColor: 'white'}}>
                  <Text>Hello</Text>
                </View>


<ScrollView style={{flex: 1}}></ScrollView>
<Text style={{color: 'white', fontSize: 99}}>A</Text>
                <Text style={{color: 'white', fontSize: 99}}>A</Text>
                <Text style={{color: 'white', fontSize: 99}}>A</Text>
                <Text style={{color: 'white', fontSize: 99}}>A</Text>
                <Text style={{color: 'white', fontSize: 99}}>A</Text>
                <Text style={{color: 'white', fontSize: 99}}>A</Text>
                <Text style={{color: 'white', fontSize: 99}}>A</Text>
                <Text style={{color: 'white', fontSize: 99}}>A</Text>
                <Text style={{color: 'white', fontSize: 99}}>A</Text>
                <Text style={{color: 'white', fontSize: 99}}>A</Text>
                <Text style={{color: 'white', fontSize: 99}}>A</Text>
                <Text style={{color: 'white', fontSize: 99}}>A</Text>

                */