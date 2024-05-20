import api from '@/api'
import { Button, Space, Table, TableProps, Tag } from 'antd'
import React, { useEffect, useState } from 'react'
import {PageParams,User} from '@/types/api'
import dayjs from 'dayjs'
import { useParams } from 'react-router-dom'
import { ColumnsType } from 'antd/es/table'
// console.log(dayjs(new Date().getTime()).format('YY-MM-DD'))
type MatchParams =  {
  id:string
}
const Welcome:React.FC = ()=>{
    const [tableData,setTableData] = useState<User.UserItem[]>([])
    const params = useParams<MatchParams>()
    
    useEffect(()=>{
        getUserList({pageNum:1})
        console.log(params.id)
    },[])

    const getUserList = async(params:PageParams)=>{
        const res = await api.getUserList({
            pageNum:params.pageNum
        })

        setTableData(res.list)
    }
    const columns: ColumnsType<User.UserItem> = [
        {
          title: '用户ID',
          dataIndex: 'userId',
          key: 'userId',
          width:'25%'
        },
        {
          title: '用户邮箱',
          dataIndex: 'userEmail',
          width:600,
          key: 'age',
        },
        {
          title: '用户角色',
          dataIndex: 'role',
          key: 'role',
        },
        {
          title: '创建时间',
          dataIndex: 'createTime',
          width:200,
          render:(createTime:string)=>{
            return <div>{dayjs(createTime).format('YYYY-MM-DD')}</div>
          }
        }
      ];
      
    return <>
        <div className='bg-info'>
            <Table
                columns={columns} 
                dataSource={tableData}
                rowKey={record=>record.userId}
                rowSelection={{type:'checkbox'}}
            />
        </div>
    </>
}

export default Welcome