import React, { Component } from 'react'
import { ActivityIndicator, Image, Text, ToastAndroid, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';

import ReadMore from '@fawazahmed/react-native-read-more';
import {DetailPostComponent,AddCommentComponent} from '../../components/Home'
import {PostServices,CommentServices} from '../../api/services'
import AsyncStorage from '@react-native-async-storage/async-storage';


class DetailPost extends Component {

    constructor(props) {
        super(props)
        this.state={
            detailPost:[],
            dataComment:[],
            userPost:"",
            postId:"",
            userId:"",
            isLoadingDetailPost:true,
            isLoadingCommentPost:true
        }
    }

    createComment = async(comment)=>{
        const{createComment}=CommentServices()
        const result = await createComment(this.state.userId,this.state.postId,comment)
        .then(res=>{
            console.log(res.data)
            if (res.data.status == true) {
                ToastAndroid.show('add comment success',ToastAndroid.LONG)
                this.getAllCommentByIdPost(this.state.postId)
            }else{
                ToastAndroid.show(`add comment failed`,ToastAndroid.SHORT)
            }
        })
    }

    getAllPostById = async(postId)=>{
        // console.log(postId)
        const{getAllById}=PostServices()
        const result = await getAllById(postId)
        .then(res=>{
            this.setState({detailPost:res.data.data}),
            this.setState({userPost:res.data.data.id_user}),
            console.log(res.data),
            this.setState({isLoadingDetailPost:false})
        })
    }

    getAllCommentByIdPost = async(postId)=>{
        const{getAllByIdPost}=CommentServices()
        const result = await getAllByIdPost(postId)
        .then(res=>{
            this.setState({dataComment:res.data.data}),
            console.log(res.data)
            this.setState({isLoadingCommentPost:false})
            // this.setState({isLoadingDetailPost:false})
        })
    }

    componentDidMount(){
        const{postId}=this.props.route.params
        this.getAllPostById(postId)
        this.getAllCommentByIdPost(postId)
        this.setState({postId:postId})
        AsyncStorage.getItem('id_user').then((value)=>{
            this.setState({userId:value})
        })
        // const{getAllById}=PostServices()
        // const result = await getAllById()
    }

    render() {
        return (
            this.state.isLoadingDetailPost ? <ActivityIndicator size="large" color='red' style={{flex:1,justifyContent:'center'}} /> :
            this.state.isLoadingCommentPost ? <ActivityIndicator size="large" color='red' style={{flex:1,justifyContent:'center'}} /> :
            <View style={{flex:1,backgroundColor:'white'}}>
                <ScrollView contentContainerStyle={{flexGrow:1}}>
                    <DetailPostComponent dataDetailPost={this.state.detailPost} dataUserPost={this.state.userPost} dataComment={this.state.dataComment}/>
                </ScrollView>
                <AddCommentComponent createComment={this.createComment}/>
            </View>
            
        )
    }
}

export default DetailPost
