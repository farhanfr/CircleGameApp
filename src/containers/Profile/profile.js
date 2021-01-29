import React, { Component } from 'react'
import { Text, View,Button } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

import {ListProfileComponent} from '../../components/Profile'

class Profile extends Component {
    render() {
        return (
            <ScrollView contentContainerStyle={{flexGrow:1}}>
                <ListProfileComponent/>
            </ScrollView>
        )
    }
}

export default Profile
