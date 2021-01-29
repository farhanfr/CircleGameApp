import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

import {ListNewsComponent} from '../../components/News'

class ListNews extends Component {
    render() {
        return (
            <ScrollView contentContainerStyle={{flexGrow:1}}>
                <ListNewsComponent navigation={this.props.navigation} />
            </ScrollView>
        )
    }
}

export default ListNews
