import React, { Component } from 'react'
import { Text, View } from 'react-native'

import SplashScreenComponent from '../../components/SplashScreen'

class SplashScreen extends Component {
    render() {
        return (
            <View>
                <SplashScreenComponent navigation={this.props.navigation}/>
            </View>
        )
    }
}

export default SplashScreen
