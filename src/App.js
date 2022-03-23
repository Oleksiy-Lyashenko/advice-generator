import axios from 'axios';
import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getNewAdvice } from './redux/actions/newAdvice';

function App() {

  useEffect(() => {
    dispatch(getNewAdvice())
  }, [])

  const dispatch = useDispatch();
  const item = useSelector(({ advice }) => advice);
  console.log(item);

  return (
    <div className="App">
      <h1>Hello world!</h1>
      <h1>{item.advice}</h1>
      <button onClick={() => dispatch(getNewAdvice())}>Add</button>
    </div>
  );
}

export default App;
