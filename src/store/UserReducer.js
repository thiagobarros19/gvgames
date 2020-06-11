const INITIAL_STATE = {
  users:{},
}

export default  function movieReducer(state = INITIAL_STATE, action){
  switch (action.type){
    case 'ADD_USERS':
      return { ...state, users: action.users}
    default:
      return state;
  }
}