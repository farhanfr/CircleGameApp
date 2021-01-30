import React, { Component } from 'react'
import { Image, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

class DetailPostComponent extends Component {
    render() {
        const { dataDetailPost } = this.props
        const { dataUserPost } = this.props
        const { dataComment } = this.props
        // console.log(dataUserPost)
        return (
            <View>
                <View style={{ paddingVertical: 10 }}>
                    {/* Detail post */}
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, paddingBottom: 10 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={{ uri: 'https://placeimg.com/640/480/people' }} style={{ width: 40, height: 40, borderRadius: 20 }} />
                            <Text style={{ paddingLeft: 10 }}>{dataUserPost.name}</Text>
                        </View>
                    </View>
                    <View style={{ paddingHorizontal: 10 }}>
                        <Text>{dataDetailPost.description}</Text>
                    </View>
                    <View style={{ paddingHorizontal: 10, paddingVertical: 10 }}>
                        <Text style={{ fontSize: 12 }}>{dataDetailPost.date_post}</Text>
                    </View>
                    {/* Line */}
                    <View style={{ paddingHorizontal: 10, paddingVertical: 10 }}>
                        <View style={{ borderBottomWidth: 1, borderColor: 'silver' }}></View>
                    </View>
                    {/* Comment */}
                    <View style={{ paddingHorizontal: 10, paddingBottom: 10 }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Comment</Text>
                    </View>
                    {dataComment.map((listComment) => {
                        return (
                            <View key={listComment.id} style={{ paddingBottom: 10 }}>
                                <View style={{ paddingVertical: 5 }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, paddingBottom: 10 }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Image source={{ uri: 'https://placeimg.com/640/480/people' }} style={{ width: 30, height: 30, borderRadius: 15 }} />
                                            <Text style={{ paddingLeft: 10, fontSize: 12 }}>{listComment.user.name}</Text>
                                        </View>
                                    </View>
                                    <View style={{ paddingHorizontal: 10 }}>
                                        <Text>{listComment.comment}</Text>
                                    </View>
                                    <View style={{ paddingHorizontal: 10, paddingVertical: 10 }}>
                                        <Text style={{ fontSize: 12 }}>Dec 27, 2021</Text>
                                    </View>
                                </View>
                            </View>
                        )
                    })}
                    <View style={{paddingVertical:20}}></View>
                </View>
            </View>

        )
    }
}

export default DetailPostComponent
