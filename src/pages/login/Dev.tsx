import { Button } from 'antd'
import React from 'react'
/**
 * refresh() 方法刷新页面
 */
const Dev: React.FC<{ refresh: () => void }> = React.memo(({ refresh }) => {
    console.log('DEV子组件')
    return (
        <div>
            DEV
            <Button color='primary' onClick={()=>refresh()}>refresh</Button>
        </div>
    )
}
)

export default Dev