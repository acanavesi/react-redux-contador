import React from "react";
import { useDispatch } from "react-redux";
import { incrementarContador } from "../redux/actions";
import { INCREMENTAR } from "../redux/consts";

const Incrementar = () => {
  const dispatch = useDispatch();

  const handllerClick = () => {
    dispatch(incrementarContador(1));
  };
  return (
    <div>
      <button onClick={handllerClick}>Incrementar</button>
    </div>
  );
};

export default Incrementar;
