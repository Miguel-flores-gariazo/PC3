import { useEffect, useState } from 'react';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

function ApiUsuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState('');
  const [recarga, setRecarga] = useState(0);

  useEffect(() => {
    const controlador = new AbortController();

    async function cargarUsuarios() {
      try {
        setCargando(true);
        setError('');

        const respuesta = await fetch(API_URL, { signal: controlador.signal });
        if (!respuesta.ok) {
          throw new Error(`La API respondió con estado ${respuesta.status}`);
        }

        const datos = await respuesta.json();
        setUsuarios(datos);
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message);
        }
      } finally {
        if (!controlador.signal.aborted) {
          setCargando(false);
        }
      }
    }

    cargarUsuarios();
    return () => controlador.abort();
  }, [recarga]);

  return (
    <section>
      <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-2">
        <div>
          <h2 className="h3 mb-1">Ejercicio 3: API REST con Bootstrap</h2>
          <p className="text-muted mb-0">
            GET a <code>{API_URL}</code>
          </p>
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setRecarga((valor) => valor + 1)}
          disabled={cargando}
        >
          {cargando ? 'Cargando...' : 'Actualizar datos'}
        </button>
      </div>

      {cargando && (
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>
          <p className="text-muted mt-3 mb-0">Consultando la API...</p>
        </div>
      )}

      {!cargando && error && (
        <div className="alert alert-danger" role="alert">
          Error al consumir la API: {error}
        </div>
      )}

      {!cargando && !error && (
        <>
          <p className="text-muted">
            {usuarios.length} usuarios recuperados en formato JSON y mostrados en tarjetas.
          </p>
          <div className="row g-3">
            {usuarios.map((usuario) => (
              <div className="col-md-6 col-lg-4" key={usuario.id}>
                <div className="card h-100 shadow-sm">
                  <div className="card-header bg-white d-flex justify-content-between align-items-center">
                    <span className="fw-semibold">{usuario.name}</span>
                    <span className="badge bg-primary">ID {usuario.id}</span>
                  </div>
                  <div className="card-body">
                    <p className="mb-1">
                      <strong>Usuario:</strong> {usuario.username}
                    </p>
                    <p className="mb-1">
                      <strong>Correo:</strong> {usuario.email}
                    </p>
                    <p className="mb-1">
                      <strong>Teléfono:</strong> {usuario.phone}
                    </p>
                    <p className="mb-1">
                      <strong>Web:</strong> {usuario.website}
                    </p>
                    <p className="mb-0">
                      <strong>Empresa:</strong> {usuario.company?.name}
                    </p>
                  </div>
                  <div className="card-footer bg-white text-muted small">
                    {usuario.address?.city} · {usuario.address?.street}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
}

export default ApiUsuarios;
