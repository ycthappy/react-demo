import api from "@/api";
import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";

const Layout:React.FC = ()=>{
    useEffect(()=>{
        getUser()
    },[])
    const getUser = async ()=>{
        const res = await api.getUser()
        console.log(res)
    }
    return<>
        <div>Layout</div>
        <Outlet></Outlet>
    </>
}

export default Layout