import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export const Styles = StyleSheet.create({
    container:{paddingVertical:10},
    containerBio1:{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, paddingBottom: 10 },
    containerBio2:{flexDirection: 'row', alignItems: 'center'},
    slideBoxDot:{ width: 5,height: 5,borderRadius: 15,marginHorizontal: 0,},
    container3Button:{flexDirection: 'row', backgroundColor: 'blue'},
    containerLikeButton:{backgroundColor: '#3498db', flex: 1},
    touchableLikeButton:{paddingVertical: 10, alignItems: 'center'},
    containerCommentButton:{backgroundColor: '#3498db', flex: 1, borderColor: 'white', borderLeftWidth: 1, borderRightWidth: 1},
    touchableCommentButton:{paddingVertical: 10, alignItems: 'center'},
    containerShareButton:{backgroundColor: '#3498db', flex: 1},
    touchableShareButton:{paddingVertical: 10, alignItems: 'center'},
    containerStatusPost:{flexDirection:'row',padding:10},
    button:{backgroundColor:'red'}
})
