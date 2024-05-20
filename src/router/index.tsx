// import Welcome from '../pages/welcome'
import { Navigate, createBrowserRouter, createHashRouter } from 'react-router-dom'
import Layout from '@/pages/layout'
import Manage from '../pages/manage'
import Login from '../pages/login'
import React from 'react'
const Welcome = React.lazy(()=>import('@/pages/welcome'))
const router = [
    {
        path:'/',
        element:<Navigate to="/login"/>
    },
    {
        path:'/',
        element:<Layout/>,
        children:[
            {
                path:'welcome/:id',
                element:<Welcome/>
            },{
                path:'manage',
                element:<Manage/>
            }
        ]
    },{
        path:'/login',
        element:<Login/>
    },{
        path:'*',
        element:<Navigate to="/"/>
    }
]

export default createBrowserRouter(router)