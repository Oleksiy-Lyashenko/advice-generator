import { combineReducers } from 'redux';
import newAdvice from './newAdvice';

const rootReduser = combineReducers({
  advice: newAdvice,
})

export default rootReduser;