import database from '../firebase/firebase';

// RETRIEVE RESULTS
export const setResults = (results) => ({
  type: 'SET_RESULTS',
  results
});

export const startSetResults = (uid) => {
  console.log(uid);
  return (dispatch) => {
    const ref = database.ref(`users/${uid}/results`);
    const results = [];
    // Retrieve from database and dispatch SET_RESULTS if successful
    ref.once('value')
      .then(snapshot => {
         snapshot.forEach(childSnapshot => {
           results.push({
             id: childSnapshot.key,
             ...childSnapshot.val()
           });
         });
         dispatch(setResults(results));
         console.log('dispatching setResults()')
      })
      .catch(e => console.log(e));
  };
};
// ADD RESULT
export const addResult = (result) => ({
  type: 'ADD_RESULT',
  result
})

export const startAddResult = (resultData = {}) => {
  return (dispatch) => {
    const {
      date = 0,
      score = 0,
      rounds = 0,
      responses = [],
      generated = [],
      uid = ''
    } = resultData;
    console.log(resultData);
    const result = { date, score, rounds, responses, generated, uid };
    const dbRef = 
    database.ref(`users/${uid}/results`).push(result)
      .then((ref) => {
        dispatch(addResult({
          id: ref.key,
          ...result
        }));
      });
  };
};