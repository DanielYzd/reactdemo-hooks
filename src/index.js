import React from 'react'
import ReactDom from 'react-dom'
// import App from './App'
// import UseContext from './UseContext/UseContext'
// import UseReducerComp from './UseReducerComp'
// import OtherHooks from './OtherHooks'
import CustomHook from './CustomHook'


//演示useState useEffect
// ReactDom.render(<App/>,document.getElementById('root'))
//演示useContext
// ReactDom.render(<UseContext/>,document.getElementById('root'))
//演示useReducer
// ReactDom.render(<UseReducerComp/>,document.getElementById('root'))
//其他hooks
// ReactDom.render(<OtherHooks/>,document.getElementById('root'))
//自己封装hooks
ReactDom.render(<CustomHook/>,document.getElementById('root'))