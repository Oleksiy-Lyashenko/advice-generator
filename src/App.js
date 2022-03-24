import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getNewAdvice } from './redux/actions/newAdvice';

import bottom from './assets/images/pattern-divider-desktop.svg';
import button from './assets/images/icon-dice.svg';

function App() {

  useEffect(() => {
    dispatch(getNewAdvice())
  }, [])

  const dispatch = useDispatch();
  const {id, advice} = useSelector(({ advice }) => advice);

  return (
    <div className="wrapper">
      <div className="content">
        <p className="title">advice #{id}</p>
        <p className="advice">"{advice}"</p>
        {/* <img src={bottom} alt="" /> */}
        <div className='bottom'></div>
        <button className="button" onClick={() => dispatch(getNewAdvice())}>
          <img src={button} alt="" className='button_img'/>
        </button>
      </div>
    </div>
  );
}

export default App;
