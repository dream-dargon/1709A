const defaultState = {
  data: [],
  age:25
}

export default function home(state = defaultState, action) {
  // console.log(action,2222)
  switch (action.type) {
    case "HOME_NAME":
      return { ...state, data: action.payload.result.list};
    
    case "HOME_AGE":
      return { ...state, age: action.payload};

    default:
      return state;
  }
}