import React from 'react';
import ReactDOM from 'react-dom/client';

const title = React.createElement('h1', null, 'Hello React脚手架!!!')
const root = ReactDOM.createRoot(document.getElementById('root'));

const jsx = <h1>Hello JSX</h1>

root.render(jsx);