import React, { Component } from 'react'
import { ActivityIndicator, Button, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

import {ListPostComponent} from '../../components/Home'
import {PostServices} from '../../api/services'

class ListPost extends Component {

    constructor(props) {
        super(props)
        this.state={
            dataListPost:[],
            isLoading:true
        }
    }

    getAllPost = async() =>{
        const{getAll}=PostServices()
        const result = await getAll()
        .then(res=>{
            this.setState({dataListPost:res.data.data}),
            this.setState({isLoading:false}),
            console.log(res.data)
        }
        )
    }

    componentDidMount(){
        this.getAllPost()
    }

    render() {
        return (
            this.state.isLoading ? <ActivityIndicator size="large" color='red' style={{flex:1,justifyContent:'center'}} /> :
            <View style={{flex:1,backgroundColor:'white'}}>
                <ScrollView contentContainerStyle={{flexGrow:1}}>
                    <ListPostComponent imagePost={this.state.images} navigation={this.props.navigation} dataListPost={this.state.dataListPost}/>
                </ScrollView>
            </View>
                
        )
    }
}

export default ListPost
