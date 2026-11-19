function Suma({ a, b }) {
  return (
    <div className="card h-100 border-primary shadow-sm">
      <div className="card-body text-center">
        <h3 className="h6 text-uppercase text-primary">Suma</h3>
        <p className="text-muted mb-1">
          {a} + {b}
        </p>
        <p className="resultado text-primary mb-0">{a + b}</p>
      </div>
    </div>
  );
}

export default Suma;
