
const postReducer = (state = {list: [{title: 'hello'}]}, action) => {
  switch (action.type) {
    case 'LOAD_POSTS':
      return {
        ...state,
        list: action.payload
      }
    default:
      return state

  }

}

export default postReducer
