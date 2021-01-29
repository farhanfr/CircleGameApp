import React, { Component } from 'react'
import { Image, Text, View } from 'react-native'

class DetailNewsComponent extends Component {
    render() {
        return (
            <View>
                {/* Header */}
                <View style={{width:'100%',height:300}}>
                    <Image source={{uri:'https://source.unsplash.com/1024x768/?nature'}} style={{resizeMode:'cover',flex:1}}/>
                </View>
                {/*Content */}
                <View style={{padding:10}}>
                <Text style={{color:'red',fontWeight:'bold'}}>Tutorial</Text>
                <Text style={{fontWeight:'bold',fontSize:16,paddingBottom:10}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lobortis tellus elit, vitae sagittis felis iaculis sed. Maecenas nisi dolor, varius vitae eleifend ac, scelerisque et quam. Suspendisse eget sapien hendrerit, pulvinar nibh ac, convallis ex. Curabitur fermentum dictum diam, quis suscipit elit maximus eget. Phasellus viverra sollicitudin fermentum. Sed condimentum rutrum urna ac efficitur. Mauris dapibus elit ac risus commodo, id consectetur erat facilisis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lobortis tellus elit, vitae sagittis felis iaculis sed. Maecenas nisi dolor, varius vitae eleifend ac, scelerisque et quam. Suspendisse eget sapien hendrerit, pulvinar nibh ac, convallis ex. Curabitur fermentum dictum diam, quis suscipit elit maximus eget. Phasellus viverra sollicitudin fermentum. Sed condimentum rutrum urna ac efficitur. Mauris dapibus elit ac risus commodo, id consectetur erat facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lobortis tellus elit, vitae sagittis felis iaculis sed. Maecenas nisi dolor, varius vitae eleifend ac, scelerisque et quam. Suspendisse eget sapien hendrerit, pulvinar nibh ac, convallis ex. Curabitur fermentum dictum diam, quis suscipit elit maximus eget. Phasellus viverra sollicitudin fermentum. Sed condimentum rutrum urna ac efficitur. Mauris dapibus elit ac risus commodo, id consectetur erat facilisis.</Text>
                </View>
                
            </View>
        )
    }
}

export default DetailNewsComponent
