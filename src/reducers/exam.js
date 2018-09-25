const initialState = {
  generatedString: [],
  responseString: [],
  responseField: '',
  currentRound: 0,
  isUserPhase: false,
  isFinished: false,
  settings: {
    rounds: 6,
    lettersPerRound: 2,
    msPerRound: 500, //4000
    allowedChars: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  }
}

export default (state = initialState, action) =>  {
  switch (action.type) {
    case 'SET_EXAM_STRING':
      return {
        ...state,
        generatedString: action.generatedString,
      };
    case 'RESET_EXAM':
      return {
        ...state,
        generatedString: [],
        responseString: [],
        responseField: '',
        currentRound: 0,
        isUserPhase: false,
        isFinished: false,
      }
    case 'INCREMENT_ROUND':
      return {
        ...state,
        currentRound: state.currentRound + 1
      }
    case 'START_EXAM':
      return {
        ...state,
        currentRound: 1
      }
    case 'START_USER_PHASE':
      return {
        ...state,
        isUserPhase: true
      }
    case 'END_USER_PHASE':
      return {
        ...state,
        isUserPhase: false
      }
    case 'SUBMIT_USER_RESPONSE':
      return {
        ...state,
        responseString: state.responseString.concat(action.userResponse)
      }
    case 'END_EXAM':
      return {
        ...state,
        isFinished: true
      }
    default:
      return state;
  }
}