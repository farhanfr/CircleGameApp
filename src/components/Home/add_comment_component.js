import React, { Component } from 'react'
import { Image, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

export class AddCommentComponent extends Component {
    render() {
        return (
            <View style={{ backgroundColor: 'white', position: 'absolute', bottom: 0, width: '100%',borderTopWidth: 1, borderColor: 'silver' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, paddingBottom: 10, alignItems: 'center' }}>
                <View style={{flex:1}}>
                    <Image source={{ uri: 'https://placeimg.com/640/480/people' }} style={{ width: 30, height: 30, borderRadius: 15 }} />
                </View>
                <View style={{flex:7}}>
                    <TextInput placeholder="add comments" />
                </View>
                <View style={{flex:2}}>
                    <Text style={{ paddingLeft: 10,textAlign:'center',fontWeight:'bold' }}>Post</Text>
                </View>
            </View>
            </View >
        )
    }
}

export default AddCommentComponent
