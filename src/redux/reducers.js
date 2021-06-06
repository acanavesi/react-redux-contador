import { DECREMENTAR, INCREMENTAR } from "./consts";

export function reducers(state, action) {
  if (action.type === DECREMENTAR) {
    return { ...state, contador: action.payload};
  }
  if (action.type === INCREMENTAR) {
    return { ...state, contador: action.payload };
  }
  return state;
}



// export function reducers(state, action) {
//   if (action.type === DECREMENTAR) {
//     return { ...state, contador: state.contador - 1 };
//   }
//   if (action.type === INCREMENTAR) {
//     return { ...state, contador: state.contador + 1 };
//   }
//   return state;
// }
