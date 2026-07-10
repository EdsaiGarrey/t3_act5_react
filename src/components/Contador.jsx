import { useState } from "react";

function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <section className="card">
      <h2>Componente con useState</h2>
      <p>Tareas completadas: {contador}</p>

      <button onClick={() => setContador(contador + 1)}>
        Sumar tarea
      </button>

      <button className="btn-secundario" onClick={() => setContador(0)}>
        Reiniciar
      </button>
    </section>
  );
}

export default Contador;