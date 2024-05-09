import request from '@/utils/request'
import {Login, Result, ResultData, User} from '@/types/api'
export default {
    login(params:Login.params){
        return request.post<string>('/users/login',params,{showLoading:false,showError:false})
    },
    getUser(){
        return request.get<User.UserItem>('/users/getUserInfo')
    },
    getUserList(params:User.Params){
        return request.get<ResultData<User.UserItem>>('/users/list',params)
    }
}