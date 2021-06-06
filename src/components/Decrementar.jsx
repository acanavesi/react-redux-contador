import React from 'react'
import { useDispatch } from 'react-redux';
import { decrementarContador } from '../redux/actions';
import { DECREMENTAR } from '../redux/consts';

const Decrementar = () => {
    const dispatch = useDispatch();

    const handllerClick = () => {
      dispatch(decrementarContador(1));
    };
    return (
      <div>
        <button onClick={handllerClick}>Decrementar</button>
      </div>
    );
}

export default Decrementar
