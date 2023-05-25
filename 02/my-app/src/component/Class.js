import React from "react";
import Person from "./Person"

// 类组件
// 1. 类名必须以大写字母开头
// 2. 必须继承React.Component
// 3. 必须包含render方法
class ClassComponent extends React.Component {

    constructor() {
        super()

        // 初始化state对象
        this.state = {
            count: 0,
            txt: "",
            city: "",
            isCheck: false,
            childMsg: ""
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

    getMsgFromChild(message) {
        console.log("从父组件收到：" + message)
        this.setState({
            childMsg: message
        })
    }

    render() {
        console.log("render~~~~~~~~~~~~~~~~~~~~")
        return (
            <div>
                <p>这是一个类组件~~~~~</p>
                <p>计数： {this.state.count} </p>
                <button onClick={() => this.handleClick1()}>按钮111</button>
                <button onClick={() => this.handleClick2()}>按钮222</button>
                <br/><br/>
                {/* 下面两个input的value可以实时保持相同 */}
                <input type="text" value={this.state.txt} onChange={(e) => this.setState({txt: e.target.value})} />
                <input type="text" value={this.state.txt} onChange={(e) => this.setState({txt: e.target.value})} />

                <br/><br/>

                <textarea value={this.state.content} onChange={(e) => {this.setState({content: e.target.value})}} />
                <textarea value={this.state.content} onChange={(e) => {this.setState({content: e.target.value})}} />

                <br/><br/>

                <select value={this.state.city} onChange={(e) => this.setState({city: e.target.value})}>
                    <option value="sh">上海</option>
                    <option value="bj">北京</option>
                    <option value="gz">广州</option>
                    <option value="sz">深圳</option>
                </select>

                <select value={this.state.city} onChange={(e) => this.setState({city: e.target.value})}>
                    <option value="sh">上海</option>
                    <option value="bj">北京</option>
                    <option value="gz">广州</option>
                    <option value="sz">深圳</option>
                </select>

                <br/><br/>
                {/* checkbox要取事件中的checked属性值 */}
                <input type="checkbox" checked={this.state.isCheck} onChange={(e) => this.setState({isCheck: e.target.checked})} />
                <input type="checkbox" checked={this.state.isCheck} onChange={(e) => this.setState({isCheck: e.target.checked})} />

                {/* 通过props传递数据给组件 */}
                <Person name="Jack" age="22" sendMsg={(msg) => this.getMsgFromChild(msg)}>
                    <p>这是children的内容***********</p>
                </Person>

                <p>{this.state.childMsg}</p>
            </div>
        )
    }
}

export default ClassComponent

// 函数组件没有自己的状态，只负责静态数据展示，不能跟用户交互
// 类组件有自己的状态，负责更新UI，让页面“动”起来