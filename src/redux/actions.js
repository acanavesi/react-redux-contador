import Contador from "../components/Contador";
import { INCREMENTAR } from "./consts";
import { DECREMENTAR } from "./consts";


export function incrementarContador(cantidad) {
  return { type: INCREMENTAR, payload: cantidad++};
}

export function decrementarContador(cantidad) {
  return { type: DECREMENTAR, payload: cantidad--};
}
