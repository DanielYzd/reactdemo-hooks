import React,{useEffect} from 'react'

const useChangeTitle=(title)=>{
    useEffect(()=>{
        document.title=title
    },[title])
}
export default function CustomHook() {
    useChangeTitle('自定义修改的标题1')
    return (
        <div>
            <h1>测试自己封装的hooks</h1>
        </div>
    )
}
