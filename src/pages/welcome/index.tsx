import api from '@/api'
import { Space, Table, TableProps, Tag } from 'antd'
import React, { useEffect, useState } from 'react'
import {PageParams,User} from '@/types/api'
import dayjs from 'dayjs'
// console.log(dayjs(new Date().getTime()).format('YY-MM-DD'))
const Welcome:React.FC = ()=>{
    const [tableData,setTableData] = useState<User.UserItem[]>([])
    
    useEffect(()=>{
        getUserList({pageNum:1})
    },[])

    const getUserList = async(params:PageParams)=>{
        const res = await api.getUserList({
            pageNum:params.pageNum
        })

        setTableData(res.list)
    }
    const columns: TableProps<User.UserItem>['columns'] = [
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