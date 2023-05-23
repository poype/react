import React from "react";

// 类组件
// 1. 类名必须以大写字母开头
// 2. 必须继承React.Component
// 3. 必须包含render方法
class ClassComponent extends React.Component {

    handleClick(e) {
        console.log("按钮被点击了！！！！！")
        console.log(e)  // 事件对象
        e.preventDefault()
    }

    render() {
        return (
            <div>
                <p>这是一个类组件~~~~~</p>
                <button onClick={this.handleClick}>点击按钮</button>
            </div>
        )
    }
}

export default ClassComponent