import React, { useState,PropsWithChildren } from 'react'
const defaultAppContextValue = {
    userName:'react,vue'
}
export const appContext = React.createContext(defaultAppContextValue)

export const AppStateContext:React.FC<PropsWithChildren<{}>> = (props)=>{
    const [state] = useState(defaultAppContextValue)
    return <appContext.Provider value={state}>
        {props.children}
    </appContext.Provider>
}