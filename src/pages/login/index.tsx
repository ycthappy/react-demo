import { Button, Form, Input, message } from 'antd'
import styles from './index.module.less'
import { Login, Result } from '@/types/api'
import api from '@/api'
import { useCallback, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { flushSync } from 'react-dom'
import { appContext } from '../appState'
import RowItem from '../components/rowItem/RowItem'

import Dev from './Dev'

import { getTime } from '@/assets/utils.ts'
export default function () {
    const value = useContext(appContext)
    const [form] = Form.useForm()
    const navigator = useNavigate()
    const [count,setCount] = useState(0)
    const [loading, setLoading] = useState<boolean>(false)
    const timer = getTime()
    console.log(timer)

    useEffect(()=>{
        form.setFieldsValue({
            userName:'409176193',
            userPwd:'940623'
        })
    },[])

    const onFinish = async (values: Login.params) => {
        try {
            flushSync(()=>{
                setLoading(true)
                console.log(count)
            })
            const res = await api.login(values)
            console.log(res)
            message.success({
                'content':'登录成功'
            })
            setLoading(false)
            localStorage.token = res
            navigator('/welcome/10')
                        
        } catch (error) {
            setLoading(false)
        }
        
    }
    const _onClick = ()=>{
        flushSync(()=>{
            setCount(count=>count + 5)
        })
    }
    const _refresh = useCallback(()=>{
        console.log('index父组件')
    },[])
    const dataObj = {
        username:'xt',
        address:'123'
    }
    return (
        <>
            <div className={styles.login}>
                {count}
                <Dev refresh={_refresh}></Dev>
                <div className='loginWrap'>系统登录{value.userName}</div>
                <RowItem data={dataObj}/>
                <Form
                    name="basic"
                    form={form}
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <Form.Item<Login.params>
                        label="Username"
                        name="userName"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item<Login.params>
                        label="Password"
                        name="userPwd"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit" loading={loading}>登录</Button>
                        {/* <Button type="primary" onClick={_onClick}>登录</Button> */}
                    </Form.Item>
                </Form>
            </div>
        </>
    )
}