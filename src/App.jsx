import "./App.css";
import TodoApp from "./components/TodoApp";
import Perfil from "./components/Perfil";
import Contador from "./components/Contador";
import ListaTareas from "./components/ListaTareas";

function App() {
  return (
    <main className="contenedor">
      <h1>Mini aplicación React</h1>
      <p className="descripcion">
        Proyecto creado con Vite + React para practicar componentes, props,
        useState y renderizado de listas.
      </p>

      <TodoApp />

      <Perfil
        nombre="Edsai Alejandro García Reyes"
        materia="Programación Web"
        grupo="Actividad 5 React"
      />

      <Contador />

      <ListaTareas />
    </main>
  );
}

export default App;