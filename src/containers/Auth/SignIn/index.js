import React, { Component } from 'react'
import { Text, ToastAndroid, View } from 'react-native'
import { SignInComponent } from '../../../components/Auth'

import {UserServices} from '../../../api/services'
import AsyncStorage from '@react-native-async-storage/async-storage'

class SignIn extends Component {

    login = async (username,password)=>{
        const{login}=UserServices()
        try {
            const result = await login(username,password)
            .then(res =>{
                console.log(res.data.status)
                if (res.data.status == true) {
                    AsyncStorage.setItem('id_user',res.data.data.id.toString()),
                    AsyncStorage.setItem('isLogin','true')    
                    ToastAndroid.show('Success login',ToastAndroid.LONG)
                    this.props.navigation.replace('MainRoute')
                }else{
                    ToastAndroid.show(`Username or password wrong`,ToastAndroid.SHORT)
                }
            })
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        return (
            <View>
                <SignInComponent login={this.login}/>
            </View>
        )
    }
}

export default SignIn
