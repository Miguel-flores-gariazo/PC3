import { useState } from 'react';
import Calculadora from './components/Calculadora';
import CuentaRegresiva from './hooks/CuentaRegresiva';
import ApiUsuarios from './Api/ApiUsuarios';
import './App.css';

const EJERCICIOS = [
  { id: 'calculadora', etiqueta: '1. Calculadora' },
  { id: 'cuenta', etiqueta: '2. Cuenta regresiva' },
  { id: 'api', etiqueta: '3. API REST + Bootstrap' },
];

function App() {
  const [activo, setActivo] = useState('calculadora');

  return (
    <div className="app-shell">
      <nav className="navbar navbar-dark bg-primary shadow-sm">
        <div className="container">
          <span className="navbar-brand mb-0 h1">Proyecto PC3 · React</span>
          <span className="navbar-text small">create-react-app + Bootstrap</span>
        </div>
      </nav>

      <main className="container py-4">
        <ul className="nav nav-pills justify-content-center gap-2 mb-4">
          {EJERCICIOS.map((ejercicio) => (
            <li className="nav-item" key={ejercicio.id}>
              <button
                type="button"
                className={`nav-link ${activo === ejercicio.id ? 'active' : ''}`}
                onClick={() => setActivo(ejercicio.id)}
              >
                {ejercicio.etiqueta}
              </button>
            </li>
          ))}
        </ul>

        {activo === 'calculadora' && <Calculadora />}
        {activo === 'cuenta' && <CuentaRegresiva />}
        {activo === 'api' && <ApiUsuarios />}
      </main>

      
    </div>
  );
}

export default App;
