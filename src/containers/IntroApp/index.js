import React, { Component } from 'react'
import { Text, View ,StyleSheet, Image} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import AppIntroSlider from 'react-native-app-intro-slider';
import {SvgUri} from 'react-native-svg'


const slides = [
    {
      key: 1,
      title: 'Title 3',
      text: 'Description.\nSay something cool',
      image: require('../../assets/icons/undraw_News_re_6uub.png'),
      backgroundColor: 'white',
    },
    {
      key: 2,
      title: 'Title 2',
      text: 'Other cool stuff',
      image: require('../../assets/icons/undraw_Online_information_re_erks.png'),
      backgroundColor: 'white',
    },
    {
      key: 3,
      title: 'Rocket guy',
      text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
      image: require('../../assets/icons/undraw_Post_re_mtr4.png'),
      backgroundColor: 'white',
    }
];


class IntroApp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showRealApp: false
        }
    }
      _renderItem = ({item}) => {
        return (
          <View style={[styles.slide,{
              backgroundColor:item.backgroundColor,
          }]}>
            <Text style={styles.title}>{item.title}</Text>
            <Image source={item.image} style={{width:300,height:300}}/>            
            <Text style={styles.text}>{item.text}</Text>
          </View>
        );
      }
      _onDone = () => {
        AsyncStorage.setItem('isIntroApp','true'),
        this.props.navigation.navigate('SignIn')
      }

      _renderNextButton = () => {
        return (
          <View style={{paddingVertical:12,paddingHorizontal:10}}>
              <Text>Next</Text>
          </View>
        );
      }

      _renderDoneButton = () => {
        return (
          <View style={{paddingVertical:12,paddingHorizontal:10}}>
              <Text>Done</Text>
          </View>
        );
      }

      _keyExtractor = (item: Item) => item.title;

    render() {
        return <AppIntroSlider 
        keyExtractor={this._keyExtractor} 
        renderItem={this._renderItem} 
        data={slides} 
        onDone={this._onDone} 
        renderNextButton={this._renderNextButton}
        renderDoneButton={this._renderDoneButton}
        />;
    }
}

export default IntroApp

const styles = StyleSheet.create({
    slide: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'blue',
    },
    image: {
      width: 320,
      height: 320,
      marginVertical: 32,
    },
    text: {
      color: 'black',
      textAlign: 'center',
    },
    title: {
      fontSize: 22,
      color: 'black',
      textAlign: 'center',
    },
  });