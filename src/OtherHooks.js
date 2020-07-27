// import React, { useMemo } from "react";
import React, { useCallback, useRef } from "react";

const UserRefComp = () => {
  const inputRef = useRef();
  const getValue = () => {
    //访问ref
    console.log(inputRef.current.value);
  };
  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={getValue}>获取input的 值</button>
    </div>
  );
};
export default function OtherHooks() {
  const obj1 = { taller: "180", name: "tom", age: "15" };
  const obj2 = { taller: "170", name: "jerry", age: "18", sex: "⼥" };
  //useMemo useCallback 唯一的不同就是返回值不同
  //使用useMemo
  //const memoValue = useMemo(() => Object.assign(obj1, obj2), [obj1, obj2]);
  //使用useCallback 返回callback整个返回函数
  const callbackValue = useCallback(() => Object.assign(obj1, obj2), [
    obj1,
    obj2
  ]);
  //输出返回值 是一个函数
  console.log(callbackValue);
  return (
    <div>
      {/* 使用useMemo返回值 */}
      {/* 姓名：{memoValue.name}---年龄：{memoValue.age} */}
      {/* 使用useCallback返回值 */}
      {callbackValue().name}
      <UserRefComp></UserRefComp>
    </div>
  );
}
