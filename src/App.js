import Contador from "./components/Contador";
import Decrementar from "./components/Decrementar";
import Incrementar from "./components/Incrementar";


function App() {

  const valor1 = 1;
  const valor2 = 2;
  const valor3 = 10;

  return (
    <div className="container m-4">
      <Decrementar valor={valor3} />
      <Decrementar valor={valor2} />
      <Decrementar valor={valor1} />
      <Contador />
      <Incrementar valor={valor1} />
      <Incrementar valor={valor2} />
      <Incrementar valor={valor3} />
    </div>
  );
}

export default App;
