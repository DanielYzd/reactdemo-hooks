import React, { useReducer } from "react";
const initState = {
  count: 0
};
const reducer = (state, action) => {
  //根据我们dispatch传入的action，来更新我们的state
  switch (action.type) {
      //重置 返回初始值
    case "reset":
      return initState;
      //加法 旧的state加1
    case "add":
      return { count: state.count + 1 };
      //减法 旧的state减1
    case "reduce":
      return { count: state.count - 1 };
    //   默认返回state
    default:
      return state;
  }
};
export default function UseReducerComp() {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <div>
      <p>当前数量{state.count}</p>
      <div>
        <button onClick={() => dispatch({ type: "reset" })}>重置</button>
        <button onClick={() => dispatch({ type: "add" })}>加1</button>
        <button onClick={() => dispatch({ type: "reduce" })}>减1</button>
      </div>
    </div>
  );
}
