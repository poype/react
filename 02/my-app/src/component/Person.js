import React from "react";

class Person extends React.Component {

    // 如果要写构造函数，props要作为构造函数的参数，且要传给super
    constructor(props) {
        console.log("Person constructor被调用");
        super(props)

        console.log(props)
        console.log(this.props)
    }

    // 当一个组件被挂载时，钩子函数的执行顺序是 constructor -> render -> componentDidMount
    componentDidMount() {
        console.log("Person componentDidMount被调用");
        // 由于componentDidMount是在render函数后面被调用的，所以可以在componentDidMount中获取到dom元素
        let button = document.getElementById("btn");
        console.log(button)
    }

    // 有三种方法会导致组件update
    // 父组件被重新渲染，父组件的render方法被调用
    // setState
    // 组件的forceUpdate方法被调用
    componentDidUpdate() {
        // 组件首次挂载不会被调用，当组件被更新时，会跟着render方法后面被调用
        console.log("Person componentDidUpdate被调用");
    }

    render() {
        console.log("Person render被调用");
        return (
            <div>
                <p>Name: {this.props.name}</p>
                <p>Age: {this.props.age}</p>
                <button id="btn" onClick={() => this.props.sendMsg("来自子组件的message")}>send message to parent</button>
                <p>start~~~~~~~~~~~~~~~~~~~</p>
                { this.props.children }
                <p>end~~~~~~~~~~~~~~~~~~~~~</p>
            </div>
        )
    }
}

export default Person;