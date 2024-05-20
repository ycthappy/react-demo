import React from 'react'
interface  PropsType {
    data:{username:string,address:string}
}
const RowItem:React.FC<PropsType> = ({data})=>{
    return <>
        <div>RowItem{data.username}</div>
    </>
}

export default RowItem