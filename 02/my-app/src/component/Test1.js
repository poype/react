import React from "react"

let countValue = 2;

class Test1 extends React.Component {

    constructor() {
        super()

        this.state = {
            count: 1
        }
    }

    handleClick() {
        this.setState({
            count: this.state.count + 1
        })
        // setState方法是异步更新state对象的，所以下面打印的还是state对象之前的值
        console.log(this.state)

        // 虽然多次调用setState函数，但效果跟调用一次一样，因为是异步修改count的值，所以此时count的值没有变
        // render函数也只执行一次
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        console.log("Test1 render~~")
        return (
            <div style={ {background: "rgb(238, 233, 227"} }>
                <p>Count: {this.state.count}</p>
                <button onClick={this.handleClick.bind(this)}>加加加！！！</button>
            </div>
        )
    }
}

export default Test1