import { Result } from '@/types/api'
import { message } from 'antd'
import axios from 'axios'
import { showLoading,hiddenLoading } from '@/utils/loading'
import { useNavigate } from 'react-router-dom'
const instance = axios.create({
    baseURL: '/api',
})
instance.interceptors.request.use(config => {
    config.headers.icode = '46C0ACDBB9ED8ECA'
    const TOKEN = localStorage.token
    if(TOKEN){
        config.headers.Authorization = 'Bearer ' + TOKEN
    }
    if(config.showLoading){
        showLoading()
    }
    return config
})

instance.interceptors.response.use(response => {
    const data: Result = response.data
    if(response.config.showLoading){
        hiddenLoading()
    }
    
    if (data.code != 0) {
        if(response.config.showError === false){
            return Promise.resolve(data)
        }else{
            message.error(data.msg)
            return Promise.reject(data)
        }
    }
    return data.data
},error=>{
    hiddenLoading()
})

interface IConfig {
    showLoading: boolean,
    showError: boolean
}

export default {
    get<T>(url: string, params?: object, options:IConfig = {showLoading:true,showError:true}): Promise<T> {
        return instance.get(url, { params, ...options })
    },
    post<T>(url: string, params?: object, options:IConfig = {showLoading:true,showError:true}): Promise<T> {
        return instance.post(url, params,options)
    }
}