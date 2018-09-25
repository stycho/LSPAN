const initialState = [];
  
export default (state = initialState, action) =>  {
  switch (action.type) {
    case 'SET_RESULTS':
    return action.results;
    case 'SAVE_RESULT':
    return {
      ...state,
      ...action.result
    }
    default:
    return state;
  }
}