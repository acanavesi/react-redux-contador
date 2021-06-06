import Contador from "../components/Contador";
import { INCREMENTAR } from "./consts";
import { DECREMENTAR } from "./consts";


export function incrementarContador(contador) {
  return { type: INCREMENTAR, payload: contador++ };
}

export function decrementarContador(contador) {
  return { type: DECREMENTAR, payload: contador-- };
}
