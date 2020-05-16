const defaultState = {
  name: '大郎'
}

export default function detail(state = defaultState, action) {
  // console.log(action,2222)
  switch (action.type) {
    case "DETAIL_NAME":
      return { ...state, name: action.payload };

    default:
      return state;
  }
}