import React from 'react';
import ReactDOM from 'react-dom/client';

const title = React.createElement('h1', null, 'Hello React脚手架!!!')
const root = ReactDOM.createRoot(document.getElementById('root'));

// 在jsx中引用JavaScript变量
let name = "Jack"

// 建议用小括号将jsx括起来，但只是建议，不是强制
const jsx = (
    <h1 className="title">
        Hello {name}
    </h1>
);

root.render(jsx);