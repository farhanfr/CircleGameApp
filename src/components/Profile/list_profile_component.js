import React, { Component } from 'react'
import { Image, Text, View } from 'react-native'

import ReadMore from '@fawazahmed/react-native-read-more';
import { TouchableOpacity } from 'react-native-gesture-handler';

class ListProfileComponent extends Component {
    render() {
        return (
            <View style={{ backgroundColor: 'white',height:'100%' }}>
                {/* Data Profile */}
                <View style={{ backgroundColor: '#3498db', alignItems: 'center', paddingVertical: 20 }}>
                    <View style={{ width: 100, height: 100, marginBottom: 10 }}>
                        <Image source={{ uri: 'https://placeimg.com/640/480/people' }} style={{ width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 50 }} />
                    </View>
                    <Text style={{ color: 'white', fontSize: 20 }}>
                        React's
                    </Text>
                    <Text style={{ color: 'white' }}>
                        MLBB ProPlayer
                    </Text>
                </View>
                {/* About Me */}
                <View style={{ padding: 20 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, paddingBottom: 10 }}>About Me</Text>
                    <ReadMore numberOfLines={8} seeMoreText="see more" seeLessText="see less" animate={false} seeMoreStyle={{ color: '#3498db' }} seeLessStyle={{ color: '#3498db' }}>
                        {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed ultricies quam. Donec ac ornare justo, eu condimentum augue. Vestibulum elit lorem, pretium sit amet euismod quis, scelerisque ac justo. Etiam consectetur posuere elit, aliquam pulvinar neque sagittis id. Nullam eleifend felis in nisl auctor tristique. Fusce pretium mauris eu nibh ornare egestas. Vestibulum eget commodo nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos"}
                    </ReadMore>
                </View>
                {/* Post */}
                <View>
                    <View style={{ paddingHorizontal: 20 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20, paddingBottom: 10 }}>User Post</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
                        <View style={{ width: `${100 / 4}%`, alignItems: 'center',marginBottom:3}}>
                            <TouchableOpacity>
                                <Image source={{ uri: 'https://source.unsplash.com/1024x768/?nature' }} style={{ width: 100, height: 100, resizeMode: 'cover',}} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ width: `${100 / 4}%`, alignItems: 'center',marginBottom:3}}>
                            <TouchableOpacity>
                                <Image source={{ uri: 'https://source.unsplash.com/1024x768/?nature' }} style={{ width: 100, height: 100, resizeMode: 'cover',}} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ width: `${100 / 4}%`, alignItems: 'center',marginBottom:3}}>
                            <TouchableOpacity>
                                <Image source={{ uri: 'https://source.unsplash.com/1024x768/?nature' }} style={{ width: 100, height: 100, resizeMode: 'cover',}} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ width: `${100 / 4}%`, alignItems: 'center',marginBottom:3}}>
                            <TouchableOpacity>
                                <Image source={{ uri: 'https://source.unsplash.com/1024x768/?nature' }} style={{ width: 100, height: 100, resizeMode: 'cover',}} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ width: `${100 / 4}%`, alignItems: 'center',marginBottom:3}}>
                            <TouchableOpacity>
                                <Image source={{ uri: 'https://source.unsplash.com/1024x768/?nature' }} style={{ width: 100, height: 100, resizeMode: 'cover',}} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ width: `${100 / 4}%`, alignItems: 'center'}}>
                            <TouchableOpacity>
                                <Image source={{ uri: 'https://source.unsplash.com/1024x768/?nature' }} style={{ width: 100, height: 100, resizeMode: 'cover',}} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ width: `${100 / 4}%`, alignItems: 'center'}}>
                            <TouchableOpacity>
                                <Image source={{ uri: 'https://source.unsplash.com/1024x768/?nature' }} style={{ width: 100, height: 100, resizeMode: 'cover',}} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ width: `${100 / 4}%`, alignItems: 'center'}}>
                            <TouchableOpacity>
                                <Image source={{ uri: 'https://source.unsplash.com/1024x768/?nature' }} style={{ width: 100, height: 100, resizeMode: 'cover',}} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ width: `${100 / 4}%`, alignItems: 'center'}}>
                            <TouchableOpacity>
                                <Image source={{ uri: 'https://source.unsplash.com/1024x768/?nature' }} style={{ width: 100, height: 100, resizeMode: 'cover',}} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

export default ListProfileComponent
