import { useEffect, useState } from 'react';

const DESTINO_INICIAL = '2026-12-31T23:59';

function dosDigitos(valor) {
  return String(valor).padStart(2, '0');
}

function calcularRestante(destino) {
  const objetivo = new Date(destino).getTime();
  if (Number.isNaN(objetivo)) return null;

  const diferencia = objetivo - Date.now();
  const totalSegundos = Math.max(0, Math.floor(diferencia / 1000));

  return {
    dias: Math.floor(totalSegundos / 86400),
    horas: Math.floor((totalSegundos % 86400) / 3600),
    minutos: Math.floor((totalSegundos % 3600) / 60),
    segundos: totalSegundos % 60,
    terminado: diferencia <= 0,
  };
}


function aValorInput(fecha) {
  const local = new Date(fecha.getTime() - fecha.getTimezoneOffset() * 60000);
  return local.toISOString().slice(0, 19);
}

function CuentaRegresiva() {
  const [destino, setDestino] = useState(DESTINO_INICIAL);
  const [restante, setRestante] = useState(() => calcularRestante(DESTINO_INICIAL));

  useEffect(() => {
    setRestante(calcularRestante(destino));

    const intervalo = setInterval(() => {
      setRestante(calcularRestante(destino));
    }, 1000);

    return () => clearInterval(intervalo);
  }, [destino]);

  const fechaValida = new Date(destino).getTime();

  function programarEn(segundos) {
    setDestino(aValorInput(new Date(Date.now() + segundos * 1000)));
  }

  return (
    <section>
      <h2 className="h3 mb-1">Ejercicio 2: cuenta regresiva con hooks</h2>
     

      <div className="row g-3 align-items-end mb-3">
        <div className="col-md-6">
          <label htmlFor="destino" className="form-label">
            Fecha y hora objetivo
          </label>
          <input
            id="destino"
            type="datetime-local"
            step="1"
            className="form-control form-control-lg"
            value={destino}
            onChange={(event) => setDestino(event.target.value)}
          />
        </div>
        <div className="col-md-6">
          <div className="d-flex flex-wrap gap-2">
            <button type="button" className="btn btn-outline-primary" onClick={() => programarEn(10)}>
              Probar 10 segundos
            </button>
            <button type="button" className="btn btn-outline-primary" onClick={() => programarEn(60)}>
              Probar 1 minuto
            </button>
            <button type="button" className="btn btn-outline-secondary" onClick={() => setDestino(DESTINO_INICIAL)}>
              Fin de año
            </button>
          </div>
        </div>
      </div>

      {!fechaValida && (
        <div className="alert alert-warning">Selecciona una fecha y hora válidas.</div>
      )}

      {fechaValida > 0 && (
        <p className="text-muted">
          Cuenta regresiva hasta el{' '}
          <strong>
            {new Date(destino).toLocaleString('es-PE', {
              dateStyle: 'long',
              timeStyle: 'short',
            })}
          </strong>
        </p>
      )}

      {restante && !restante.terminado && (
        <div className="row g-3 text-center">
          {[
            { valor: restante.dias, etiqueta: 'Días' },
            { valor: dosDigitos(restante.horas), etiqueta: 'Horas' },
            { valor: dosDigitos(restante.minutos), etiqueta: 'Minutos' },
            { valor: dosDigitos(restante.segundos), etiqueta: 'Segundos' },
          ].map((item) => (
            <div className="col-6 col-lg-3" key={item.etiqueta}>
              <div className="tiempo-caja p-4 shadow-sm">
                <div className="tiempo-numero text-primary">{item.valor}</div>
                <div className="text-uppercase text-muted small mt-2">{item.etiqueta}</div>
              </div>
            </div>
          ))}
        </div>
      )}

      {restante && restante.terminado && fechaValida > 0 && (
        <div className="alert alert-success mt-3 mb-0">
          ¡Tiempo cumplido! La fecha y hora programada ya llegó.
        </div>
      )}
    </section>
  );
}

export default CuentaRegresiva;
