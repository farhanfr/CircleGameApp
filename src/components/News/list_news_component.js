import React, { Component } from 'react'
import { Image, Text, View } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'

class ListNewsComponent extends Component {
    render() {
        return (
            <View style={{backgroundColor:'white',height:'100%'}}>
                {/* Top News */}
                <View>
                    <View style={{ paddingLeft: 16, paddingVertical: 16 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 26 }}>Top News</Text>
                    </View>
                    <ScrollView horizontal style={{ flexDirection: 'row', paddingLeft: 16 }}>
                        <TouchableOpacity activeOpacity={1} onPress={()=>this.props.navigation.navigate('DetailNews')}>
                        <View style={{ marginRight: 60, width: 300 }}>
                            <View style={{ width: 350, height: 250, borderRadius: 4 }}>
                                <Image source={{ uri: 'https://source.unsplash.com/1024x768/?nature' }} style={{ width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 4 }} />
                            </View>
                            <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'black', marginTop: 16 }}>Berita 1</Text>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>Genshin Impact realese new character</Text>
                        </View>
                        </TouchableOpacity>
                        <View style={{ marginRight: 60, width: 300 }}>
                            <View style={{ width: 350, height: 250, borderRadius: 4 }}>
                                <Image source={{ uri: 'https://source.unsplash.com/1024x768/?nature' }} style={{ width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 4 }} />
                            </View>
                            <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'black', marginTop: 16 }}>Berita 1</Text>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>Genshin Impact realese new character</Text>
                        </View>
                    </ScrollView>
                </View>
                {/* Line */}
                <View style={{ paddingHorizontal: 16, marginTop: 30 }}>
                    <View style={{ borderBottomWidth: 1, borderColor: 'silver' }}></View>
                </View>
                {/* New News */}
                <View>
                    <View style={{ paddingLeft: 16, paddingVertical: 16 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 26 }}>New News</Text>
                    </View>
                    <View style={{flexDirection:'row',flexWrap:'wrap',justifyContent:'space-between',paddingHorizontal:10}}>
                        <View style={{width: `${100 / 2}%`, alignItems: 'center',marginBottom: 18}}>
                            <View style={{ width: 180, height: 130, borderRadius: 4,backgroundColor:'blue'}}>
                                <Image source={{ uri: 'https://source.unsplash.com/1024x768/?nature' }} style={{ width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 4 }} />
                            </View>
                            <View style={{width: '100%',paddingHorizontal:10}}>
                                <Text style={{paddingVertical:5,fontSize:12,fontWeight:'bold',color:'red'}}>FESTIVALS</Text>
                                <Text style={{fontWeight:'bold',fontSize:16}} numberOfLines={2} ellipsizeMode='tail'>Explore game 2022 after all ssas asas asas</Text>
                            </View>
                        </View>
                        <View style={{width: `${100 / 2}%`, alignItems: 'center',marginBottom: 18}}>
                            <View style={{ width: 180, height: 130, borderRadius: 4,backgroundColor:'blue'}}>
                                <Image source={{ uri: 'https://source.unsplash.com/1024x768/?nature' }} style={{ width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 4 }} />
                            </View>
                            <View style={{width: '100%',paddingHorizontal:10}}>
                                <Text style={{paddingVertical:5,fontSize:12,fontWeight:'bold',color:'red'}}>FESTIVALS</Text>
                                <Text style={{fontWeight:'bold',fontSize:16}} numberOfLines={2} ellipsizeMode='tail'>Explore game 2022 after all ssas asas asas</Text>
                            </View>
                        </View>
                    </View>
                </View>
                {/* Line */}   
                <View style={{ paddingHorizontal: 16, marginTop: 20 }}>
                    <View style={{ borderBottomWidth: 1, borderColor: 'silver' }}></View>
                </View>
                {/* Recent news */}   
                <View>
                    <View style={{ paddingLeft: 16, paddingVertical: 16 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 26 }}>Recent News</Text>
                    </View>
                    <View>
                        <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:16,paddingBottom:10}}>
                            <View style={{flex:2}}>
                                <Text style={{color:'red',fontWeight:'bold'}}>Tutorial</Text>
                                <Text style={{fontWeight:'bold',fontSize:16}} numberOfLines={3} ellipsizeMode="tail">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                            </View>
                            <View style={{height:120,flex:1}}>
                                <Image source={{ uri: 'https://source.unsplash.com/1024x768/?nature' }} style={{ width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 4 }} />
                            </View>
                        </View>
                        <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:16,paddingBottom:10}}>
                            <View style={{flex:2}}>
                                <Text style={{color:'red',fontWeight:'bold'}}>Tutorial</Text>
                                <Text style={{fontWeight:'bold',fontSize:16}} numberOfLines={3} ellipsizeMode="tail">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                            </View>
                            <View style={{height:120,flex:1}}>
                                <Image source={{ uri: 'https://source.unsplash.com/1024x768/?nature' }} style={{ width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 4 }} />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

export default ListNewsComponent
