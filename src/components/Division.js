function Division({ a, b }) {
  const divisionPorCero = b === 0;
  const resultado = divisionPorCero ? null : a / b;

  return (
    <div className="card h-100 border-danger shadow-sm">
      <div className="card-body text-center">
        <h3 className="h6 text-uppercase text-danger">División</h3>
        <p className="text-muted mb-1">
          {a} ÷ {b}
        </p>
        {divisionPorCero ? (
          <p className="text-danger small mb-0">No se puede dividir entre 0</p>
        ) : (
          <p className="resultado text-danger mb-0">
            {Number.isInteger(resultado) ? resultado : resultado.toFixed(2)}
          </p>
        )}
      </div>
    </div>
  );
}

export default Division;
