import { create } from 'zustand'

export const store = create<{token:string,updateUserInfo:(token:string)=>void}>(set=>(
    {
        token:'1233332',
        updateUserInfo:(token)=>set({token})
    }
))