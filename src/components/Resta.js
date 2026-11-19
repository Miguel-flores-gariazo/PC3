function Resta({ a, b }) {
  return (
    <div className="card h-100 border-success shadow-sm">
      <div className="card-body text-center">
        <h3 className="h6 text-uppercase text-success">Resta</h3>
        <p className="text-muted mb-1">
          {a} - {b}
        </p>
        <p className="resultado text-success mb-0">{a - b}</p>
      </div>
    </div>
  );
}

export default Resta;
