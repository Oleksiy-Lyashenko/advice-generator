import axios from 'axios';

export const getNewAdvice = () => (dispatch) => {
  axios.get('https://api.adviceslip.com/advice').then(({ data }) => dispatch(setAdvice(data.slip)));
};

const setAdvice = (payload) => ({
  type: 'SET_NEW_ADVICE',
  payload,
});
