import React from 'react';
import ReactDOM from 'react-dom/client';

const title = React.createElement('h1', null, 'Hello React脚手架!!!')
const root = ReactDOM.createRoot(document.getElementById('root'));

// 在jsx中引用JavaScript变量
let name = "Jack"

// 大括号中可以使用多种的JavaScript表达式
let sayHi = () => "Hi ~~~"
// jsx也属于一种JavaScript表达式
let div = <div>I am a div</div>

// 建议用小括号将jsx括起来，但只是建议，不是强制
const jsx = (
    <h1 className="title">
        Hello {name}
        <p>{1}</p>
        <p>{'a'}</p>
        <p>{true}</p>
        <p>{4 > 5 ? "大于" : "小于"}</p>
        <p>{sayHi()}</p>
        {div}

        {/* jsx中不能直接嵌入JavaScript对象 */}
        {/* { {a:1} } */}
        {/* jsx中不能使用语句 */}
        {/* {if (condition) {}} */}
    </h1>
);


// 条件渲染
let isLoading = false

// 1. 使用函数返回不同的元素
function loadData() {
    if(isLoading) {
        return <div>正在加载数据</div>
    }
    return <div>数据加载完成</div>
}

const page1 = (
    <div>
        {loadData()}
        {/* 2.用条件表达式 */}
        <p>{isLoading ? "data is loading" : "data loading complete"}</p>
        {/* 3.要么显示，要不什么都不显示 */}
        <p>{isLoading && "data is loading ~~~~"}</p>
    </div>
)

root.render(page1);