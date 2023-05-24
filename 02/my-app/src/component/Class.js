import React from "react";

// 类组件
// 1. 类名必须以大写字母开头
// 2. 必须继承React.Component
// 3. 必须包含render方法
class ClassComponent extends React.Component {

    constructor() {
        super()

        // 初始化state对象
        this.state = {
            count: 0
        }
    }

    handleClick1() {
        console.log("按钮111被点击了！！！！！")

        // 直接这样修改state对象的属性值不会让页面变化
        this.state.count++
    }

    handleClick2() {
        console.log("按钮222被点击了！！！！！")

        // 只有调用setState函数更新state对象才能让页面更新
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div>
                <p>这是一个类组件~~~~~</p>
                <p>计数： {this.state.count} </p>
                <button onClick={() => this.handleClick1()}>按钮111</button>
                <button onClick={() => this.handleClick2()}>按钮222</button>
            </div>
        )
    }
}

export default ClassComponent

// 函数组件没有自己的状态，只负责静态数据展示，不能跟用户交互
// 类组件有自己的状态，负责更新UI，让页面“动”起来