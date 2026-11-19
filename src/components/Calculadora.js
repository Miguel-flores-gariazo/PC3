import { useState } from 'react';
import Suma from './Suma';
import Resta from './Resta';
import Multiplicacion from './Multiplicacion';
import Division from './Division';

function Calculadora() {
  const [numeroA, setNumeroA] = useState('10');
  const [numeroB, setNumeroB] = useState('5');

  const a = Number(numeroA) || 0;
  const b = Number(numeroB) || 0;

  return (
    <section>
      <h2 className="h3 mb-1">Ejercicio 1: las 4 operaciones básicas</h2>
      <p className="text-muted mb-4">
        Cada operación vive en su propio componente: suma, resta, multiplicación y división.
      </p>

      <div className="row g-3 mb-4">
        <div className="col-md-6">
          <label htmlFor="numeroA" className="form-label">
            Número A
          </label>
          <input
            id="numeroA"
            type="number"
            className="form-control form-control-lg"
            value={numeroA}
            onChange={(event) => setNumeroA(event.target.value)}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="numeroB" className="form-label">
            Número B
          </label>
          <input
            id="numeroB"
            type="number"
            className="form-control form-control-lg"
            value={numeroB}
            onChange={(event) => setNumeroB(event.target.value)}
          />
        </div>
      </div>

      <div className="row g-3">
        <div className="col-6 col-lg-3">
          <Suma a={a} b={b} />
        </div>
        <div className="col-6 col-lg-3">
          <Resta a={a} b={b} />
        </div>
        <div className="col-6 col-lg-3">
          <Multiplicacion a={a} b={b} />
        </div>
        <div className="col-6 col-lg-3">
          <Division a={a} b={b} />
        </div>
      </div>
    </section>
  );
}

export default Calculadora;
