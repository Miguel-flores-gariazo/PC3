function Multiplicacion({ a, b }) {
  return (
    <div className="card h-100 border-warning shadow-sm">
      <div className="card-body text-center">
        <h3 className="h6 text-uppercase text-warning-emphasis">Multiplicación</h3>
        <p className="text-muted mb-1">
          {a} × {b}
        </p>
        <p className="resultado text-warning-emphasis mb-0">{a * b}</p>
      </div>
    </div>
  );
}

export default Multiplicacion;
