import React from 'react'
import { connect } from 'react-redux'
import { changeObj, changeData } from '@/actions/practive'
import { Table } from 'antd'

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
  },
  {
    title: '标签',
    dataIndex: 'tags',
  },
  {
    title: '标题',
    dataIndex: 'title',
  },
];

export default @connect(state =>{
  return {
    count:state.practive.count, 
    data: state.practive.data,
    obj: state.practive.obj
  }
},{
  changeObj,
  changeData,
})

class Practive extends React.Component{

  onClick = () => {
    const { changeObj } = this.props;
    changeObj('小华');
  }

  onChange = (page) => {
    this.props.changeData({page})
  }

  componentDidMount () {
    this.props.changeData()
  }

  render () {
    const { obj, data, count } = this.props;

    return (
      <div>
        {obj.name}<button onClick={this.onClick}>点击一下</button>
        <Table 
          dataSource={data}
          columns={columns} 
          rowKey={v => v.id}
          pagination={{
            pageSize:20,
            total:Number(count),
            onChange: opt => this.onChange(opt)
          }}
         />;
      </div>
    )
  }
}