
const initialState = {
  id: 0,
  advice: '',
}

const newAdvice = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NEW_ADVICE':
      return {
        ...state,
        id: action.payload.id,
        advice: action.payload.advice,
      };
  
    default:
      return state;
  }
}

export default newAdvice;