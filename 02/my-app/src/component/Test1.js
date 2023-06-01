import React from "react"

class Test1 extends React.Component {

    constructor() {
        super()

        this.state = {
            count: 1
        }
    }

    // shouldComponentUpdate可以通过返回值决定是否执行渲染，返回true执行渲染，返回false不执行渲染
    // 返回fasle只是不执行渲染，但state对象的值还是会被更新
    shouldComponentUpdate(nextProps, nextState) {
        // 在钩子函数内部可以获取到最新的state对象和当前的state对象，通过它们判断是否需要执行渲染
        console.log("最新的state: ", nextState)
        console.log("当前的state: ", this.state)
        
        if(nextState.count % 2 == 0) {
            return true
        }
        return false
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

    // render方法的调用并不意味着浏览器中的重新渲染
    // render方法的调用仅仅说明要进行diff比对，如果比对出差异，才会执行浏览器中的渲染
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