import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

import {DetailNewsComponent} from '../../components/News'

class DetailNews extends Component {
    render() {
        return (
            <View style={{flex:1,backgroundColor:'white'}}>
            <ScrollView contentContainerStyle={{flexGrow:1}}>
                <DetailNewsComponent/>
            </ScrollView>
            </View>
        )
    }
}

export default DetailNews
