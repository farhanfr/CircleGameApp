import React, { Component } from 'react'
import { Button, Image, Text, Touchable, View } from 'react-native'
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';

import { SliderBox } from "react-native-image-slider-box";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import OptionsMenu from 'react-native-popup-menu';
import ReadMore from '@fawazahmed/react-native-read-more';
import { color } from 'react-native-reanimated';
import { Styles } from './style/list_post_style'


class ListPostComponent extends Component {
    render() {
        const { imagePost } = this.props
        const { dataListPost } = this.props
        console.log(dataListPost)
        return (
            <View>
                {dataListPost.map((listPost) => {
                    return (
                        <View key={listPost.id} style={Styles.container}>
                            <View style={Styles.containerBio1}>
                                <View style={Styles.containerBio2}>
                                    <Image source={{ uri: 'https://placeimg.com/640/480/people' }} style={{ width: 40, height: 40, borderRadius: 20 }} />
                                    <Text style={{ paddingLeft: 10 }}>{listPost.id_user.name}</Text>
                                </View>
                            </View>
                            <View>
                                <SliderBox
                                    images={listPost.photo}
                                    sliderBoxHeight={300}
                                    onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
                                    dotColor="#FFEE58"
                                    inactiveDotColor="#90A4AE"
                                    dotStyle={Styles.slideBoxDot}
                                />
                            </View>
                            <View style={Styles.container3Button}>
                                <View style={Styles.containerLikeButton}>
                                    <TouchableOpacity style={Styles.touchableLikeButton}>
                                        <Text style={{ color: 'white' }}>Like</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={Styles.containerCommentButton}>
                                    <TouchableOpacity style={Styles.touchableCommentButton}>
                                        <Text style={{ color: 'white' }}>Comments</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={Styles.containerShareButton}>
                                    <TouchableOpacity style={Styles.touchableShareButton}>
                                        <Text style={{ color: 'white' }}>Share</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={Styles.containerStatusPost}>
                                <View style={{ flex: 1, alignItems: 'center' }}>
                                    <Text>{listPost.like} <MaterialCommunityIcons name="heart" color={'#c0392b'} size={16} /></Text>
                                </View>
                                <View style={{ flex: 1, alignItems: 'center' }}>
                                    <Text>{listPost.comment}<MaterialCommunityIcons name="comment-text" color={'#f39c12'} size={16} /></Text>
                                </View>
                                <View style={{ flex: 1, alignItems: 'center' }}>
                                    <Text>{listPost.share}<MaterialCommunityIcons name="share" color={'#2980b9'} size={16} /></Text>
                                </View>
                            </View>
                            <View style={{ paddingHorizontal: 10 }}>
                                <ReadMore numberOfLines={5} seeMoreText="see more" seeLessText="see less" animate={false} seeMoreStyle={{ color: '#3498db' }} seeLessStyle={{ color: '#3498db' }}>
                                    {listPost.description}
                                </ReadMore>
                            </View>
                            <View style={{ paddingHorizontal: 10, paddingVertical: 10 }}>
                                <Text style={{ fontSize: 12 }}>{listPost.date_post}</Text>
                            </View>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('DetailPost',{postId:listPost.id})}>
                                <View style={{ backgroundColor: '#3498db', alignItems: 'center', paddingVertical: 10 }}>
                                    <Text style={{ color: 'white' }}>Click for Detail Post</Text>
                                </View>
                            </TouchableOpacity>
                            {/* <Button title="test" onPress={()=>this.props.navigation.navigate('DetailPost')} /> */}
                        </View>
                    )
                })}
            </View>
        )
    }

}

export default ListPostComponent
