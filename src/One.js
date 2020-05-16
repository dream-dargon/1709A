import React, { Component } from 'react'
import shortid from 'shortid'
export default class One extends Component {
    state = {
        data:[
            { name: '小华', id: shortid.generate() },
            { name: '小白', id: shortid.generate() },
            { name: '小红', id: shortid.generate() },
        ]
    }
    fn = () => {
        this.state.data.splice(1, 1)
        this.setState({
            data:this.state.data
        })
    }
    render() {
        const { data } = this.state;
        return (
            <div>
                {
                    data.map((v, i) => {
                        return (
                            <div key={v.id}>
                                {v.name}
                                <input type="text" />
                            </div>
                        )
                    })
                }
                <button onClick={this.fn}>点击</button>
            </div>
        )
    }
}
