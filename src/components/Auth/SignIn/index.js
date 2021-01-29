import React, { Component } from 'react'
import { Image, Text, View } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'

import {Styles} from '../style/signin_style'

class SignInComponent extends Component {

    constructor(props) {
        super(props)
        this.state={
            username:"",
            password:""
        }
    }

    render() {
        return (
            <View style={Styles.wrapper}>
                <View style={Styles.container}>
                    <Image source={require('../../../assets/icons/joystick.png')} style={{width:100,height:100}}/>
                    <View style={Styles.containerTitle}>
                    <Text style={Styles.titleSignin1}>Proceed with your</Text>
                    <Text style={Styles.titleSignin2}>Login</Text>
                    </View>
                    
                    <View style={Styles.containerInput}>
                    <Text>Username</Text>
                    <View style={{borderBottomColor: 'black',borderBottomWidth: 0.5,}}>
                    <TextInput placeholder="Insert username" onChangeText={(value)=>this.setState({username:value})}/>
                    </View>
                    <View style={{height:15}}></View>
                    <Text>Password</Text>
                    <View style={{borderBottomColor: 'black',borderBottomWidth: 0.5,}}>
                    <TextInput placeholder="Insert password" onChangeText={(value)=>this.setState({password:value})}/>
                    </View>
                    </View>

                    <TouchableOpacity onPress={()=>this.props.login(this.state.username,this.state.password)}>
                    <View style={Styles.buttonLogin}>
                        <Text style={{textAlign:'center',color:'white'}}>Login</Text>
                    </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default SignInComponent
