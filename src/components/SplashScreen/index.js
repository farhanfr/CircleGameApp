import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { Component } from 'react'
import { Image, Text, View } from 'react-native'

import {Styles} from './style/splash_screen_style'

class SplashScreenComponent extends Component {

    constructor(props) {
        super(props)
        this.state={
            isIntroApp:"",
            isLogin:""
        }
    }

    componentDidMount(){
        AsyncStorage.getItem('isIntroApp').then((value)=>{
            console.log(value)
            this.setState({isIntroApp:value})
        })  
        AsyncStorage.getItem('isLogin').then((value)=>{
            console.log(value)
            this.setState({isLogin:value})
        })  

        setTimeout(() => {
            if (this.state.isIntroApp == "true") {
                if (this.state.isLogin == "true") {
                    this.props.navigation.replace('MainRoute')
                }else{
                    this.props.navigation.replace('SignIn')
                }
            }else{
                this.props.navigation.replace('IntroApp')
            }
            // console.log()
        }, 3000);
    }

    render() {
        return (
            <View>
                <View style={Styles.container}>
                    <Image source={require('../../assets/icons/joystick.png')} />
                    <View style={{height:20}}></View>
                    <Text style={Styles.titleApp}>Circle Game</Text>
                </View>
            </View>
        )
    }
}

export default SplashScreenComponent
