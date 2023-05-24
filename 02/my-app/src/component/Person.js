import React from "react";

class Person extends React.Component {

    // 如果要写构造函数，props要作为构造函数的参数，且要传给super
    constructor(props) {
        super(props)

        console.log(props)
        console.log(this.props)
    }

    render() {
        return (
            <div>
                <p>Name: {this.props.name}</p>
                <p>Age: {this.props.age}</p>
                <button onClick={() => this.props.sendMsg("来自子组件的message")}>send message to parent</button>
            </div>
        )
    }
}

export default Person;