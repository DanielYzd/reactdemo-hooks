import React, { useState, useEffect } from "react";

function Effect() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    //处理副作用逻辑
    document.title = `你点击了${count}次哦`;
    return () => {
      //数组为[count]的情况下，组件更新或者卸载都会执行，如果数组为空[]只有在卸载后才执行
      console.log("组件卸载或更新了");
    };
  }, []);
  return (
    <div>
      你点击了{count}次
      <button onClick={() => setCount(count + 1)}>点击+</button>
    </div>
  );
}
export default function App() {
  const [count, setCount] = useState(() => 10);
  return (
    <div>
      我是函数式组件hooks
      <div>你点击了{count}次</div>
      <button onClick={() => setCount(count - 1)}>点击—</button>
      <button onClick={() => setCount(count + 1)}>点击+</button>
      <p />
      使用用了useeffect组件
      {count>=10?<Effect></Effect>:null}
    </div>
  );
}
