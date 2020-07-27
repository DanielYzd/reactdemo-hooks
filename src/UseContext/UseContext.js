import React ,{useContext} from 'react'
import Child from './ContextChild'
import {Tim} from '../store/index'

//创建context对象
// export const Context = React.createContext({name:'daniel',yearsold:18})
export default function UseContext() {
    const ctx = useContext(Tim)
    console.log(ctx)
    return (
        <div>
            <div>我是{ctx.name},今年{ctx.yearsold}岁</div>
            <p>使用子组件</p>
           <Child></Child>
        </div>
    )
}
