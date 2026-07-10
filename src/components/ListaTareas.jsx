function ListaTareas() {
  const tareas = [
    "Crear proyecto con Vite + React",
    "Crear componente funcional simple",
    "Crear componente con props",
    "Usar useState",
    "Renderizar lista con map()",
    "Subir proyecto a GitHub Pages"
  ];

  return (
    <section className="card">
      <h2>Lista renderizada con map()</h2>

      <ul>
        {tareas.map((tarea, index) => (
          <li key={index}>{tarea}</li>
        ))}
      </ul>
    </section>
  );
}

export default ListaTareas;