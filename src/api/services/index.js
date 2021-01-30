import axios from 'axios'
import {BASE_URL} from '../stores'

const UserServices = () =>{
    const login = async (usernameInput,passwordInput) => await axios.post(`${BASE_URL}/user/login`,{
    username:usernameInput,
    password:passwordInput
    })
    return{login}
}

const PostServices = () =>{
    const getAll = async() => await axios.get(`${BASE_URL}/post/get/all`)
    const getAllById = async(id) => await axios.get(`${BASE_URL}/post/get/all/${id}`)
    return{getAll,getAllById}
}

const CommentServices = ()=>{
    const createComment = async(idUser,idPost,comment) => await axios.post(`${BASE_URL}/comment/add`,{
        id_user:idUser,
        id_post:idPost,
        comment:comment
    })
    const getAllByIdPost= async(id) => await axios.get(`${BASE_URL}/comment/get/all/${id}`)
    return{createComment,getAllByIdPost}
}

export{UserServices,PostServices,CommentServices}