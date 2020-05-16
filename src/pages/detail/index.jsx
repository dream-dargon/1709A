import React, { Component } from 'react'
import { Table } from 'antd'

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    render: text => <h1>{text}</h1>,
  },
  {
    title: '年龄',
    dataIndex: 'age',
  },
  {
    title: '地址',
    dataIndex: 'address',
  },
]

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
]

export default class Detail extends React.Component {
    componentDidMount () {
        console.log(this.props.match.params,111)
    }

    componentWillReceiveProps (nextProps) {
        console.log(nextProps.match.params,222)
    }
    render () {
        return (
        <Table columns={columns} dataSource={data} />
        )
    }
}
