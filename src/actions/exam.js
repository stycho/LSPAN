export const setExamString = (generatedString) => ({
  type: 'SET_EXAM_STRING',
  generatedString
});

export const startExam = () => ({
  type: 'START_EXAM'
});

export const resetExam = () => ({
  type: 'RESET_EXAM'
});

export const startUserPhase = () => ({
  type: 'START_USER_PHASE'
});

export const endUserPhase = () => ({
  type: 'END_USER_PHASE'
});

export const submitUserResponse = (userResponse) => ({
  type: 'SUBMIT_USER_RESPONSE',
  userResponse
});

export const incrementRound = () => ({
  type: 'INCREMENT_ROUND'
});

export const endExam = () => ({
  type: 'END_EXAM'
});

export const submitTestResult = (testResult) => ({
  type: 'SUBMIT_TEST_RESULT',
  testResult
});