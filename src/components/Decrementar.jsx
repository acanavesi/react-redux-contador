import React from 'react'
import { useDispatch } from 'react-redux';
import { decrementarContador } from '../redux/actions';
import { DECREMENTAR } from '../redux/consts';

const Decrementar = ({valor}) => {
  const dispatch = useDispatch();

  const handllerClick = () => {
    dispatch(decrementarContador(valor));
  };
  return (
    <div className="m-2">
      <button className="btn btn-danger" onClick={handllerClick}>
        Decrementar en {valor}
      </button>
    </div>
  );
};

export default Decrementar
