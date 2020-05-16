import _ from 'loadsh'

const defaultState = {
  data: [],
  obj: { name: '小明' },
  count:0,
  token: '',
  datalist:[]
}

export default function (state = defaultState,action) {
  switch (action.type) {
    case 'PRACTIVE_CHANGE':
      state.obj.name = action.payload;
      return { ...state, obj: _.cloneDeep(state.obj)};

    case 'PRACTIVE_CHANGE_DATA':
      return {
        ...state,
        data:action.payload.result.list, 
        count: action.payload.result.count
      };
    
    case 'PRACTIVE_LOGIN_DATA':
      return {
        ...state,
        token:action.payload.result,
      };
    
    case 'PRACTIVE_LIST_DATA':
      console.log(action.payload,'list111')
      return {
        ...state,
        datalist:action.payload.result,
      };

    default:
      return state;
  }
}