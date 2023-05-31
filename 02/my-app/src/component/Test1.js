import React from "react"

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

    handleClick2() {
        this.setState((state, props) =>{
            return {
                count: state.count + 1
            }
        })

        // state参数就是最新的state对象值，所以这里获取到的state对象是加1之后的
        this.setState((state, props) =>{
            console.log("第二次调用setState函数，获取到的是最新的state对象 " + state);
            return {
                count: state.count + 1
            }
        }, () => {
            // 这个回调函数会在state对象被真正更新完后被调用
            console.log("state对象被更新完 ", this.state)
        })

        console.log("同步打印state对象的值还是老的值 ", this.state);
    }

    render() {
        console.log("Test1 render~~")
        return (
            <div style={ {background: "rgb(238, 233, 227"} }>
                <p>Count: {this.state.count}</p>
                <button onClick={this.handleClick.bind(this)}>加加加！！！</button>
                <button onClick={this.handleClick2.bind(this)}>加加加22！！！</button>
            </div>
        )
    }
}

export default Test1