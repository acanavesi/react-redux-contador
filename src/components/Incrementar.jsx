import React from "react";
import { useDispatch } from "react-redux";
import { incrementarContador } from "../redux/actions";
import { INCREMENTAR } from "../redux/consts";

const Incrementar = ({valor}) => {
  const dispatch = useDispatch();

  const handllerClick = () => {
    dispatch(incrementarContador( valor ));
  };
  return (
    <div className="m-2">
      <button className="btn btn-success" onClick={handllerClick}>
        Incrementar en {valor}
      </button>
    </div>
  );
};

export default Incrementar;
