function Perfil({ nombre, materia, grupo }) {
  return (
    <section className="card">
      <h2>Componente con props</h2>
      <p><strong>Nombre:</strong> {nombre}</p>
      <p><strong>Materia:</strong> {materia}</p>
      <p><strong>Grupo:</strong> {grupo}</p>
    </section>
  );
}

export default Perfil;