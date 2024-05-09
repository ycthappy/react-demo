declare module 'axios' {
    interface AxiosRequestConfig {
        showLoading?: boolean,
        showError?: boolean
    }
}

export interface Result<T = any> {
    code: number,
    data: T,
    msg: string
}

export interface ResultData<T = any>{
    list:T[],
    page:{
        pageNum:number,
        pageSize:number,
        total:number
    }
}

export namespace Login {
    export interface params {
        userName: string,
        userPwd: string
    }
}

export interface PageParams{
    pageNum:number,
    pageSize?:number
}

export namespace User {
    export interface Params extends PageParams{
        userId?:number,
        userName?:string,
        state?:number
    }
    export interface UserItem {
        "_id": string,
        "userId": number,
        "userName": string,
        "userEmail": string,
        "mobile": string,
        "deptId": string,
        "deptName": string,
        "job": string,
        "state": number,
        "role": number,
        "roleList": any,
        "createId": number,
        "userImg": string
    }
}