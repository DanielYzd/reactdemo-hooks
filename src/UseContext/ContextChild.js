import React,{useContext} from 'react'
import {Jerry} from '../store/index'

export default function ContextChild() {
    const ctx = useContext(Jerry)
    return (
        <div>
             <div>我是{ctx.name},今年{ctx.yearsold}岁</div>
        </div>
    )
}
