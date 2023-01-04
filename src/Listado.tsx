import Pronostico from './interfaces/Pronostico';
import { PropsListado } from './types';

const Listado = ({ datos, children }: PropsListado<Pronostico>): JSX.Element => {
  const tableBody = (): JSX.Element[] =>
    datos.map((pronostico: Pronostico, index) =>
      <tr className='add-row-animation' key={index}>
        <td>{pronostico.fecha}</td>
        <td>{pronostico.hora}</td>
        <td>
          <div className="progress" style={{ height: '20px' }}>
            <div className="progress-bar progress-bar-striped bg-info" role="progressbar"
              style={{ width: `${pronostico.poP}%` }}
              aria-valuenow={pronostico.poP} aria-valuemin={0} aria-valuemax={100}>
              {pronostico.poP}%
            </div>
          </div>
        </td>
        <td>{pronostico.temperature}°C</td>
        <td>
          <img src={pronostico.url} width="30" height="30" />
          {pronostico.nombre}
        </td>
      </tr>
    );

  return (
    <div>
      <div className="contenido table-responsive">
        {children}
        <table className="table table-striped justify-content-center">
          <thead className="header">
            <tr>
              <th scope="col">Día</th>
              <th scope="col">Hora</th>
              <th scope="col">Probabilidad de Lluvia</th>
              <th scope="col">Temperatura</th>
              <th scope="col">Estado</th>
            </tr>
          </thead>
          <tbody>
            {tableBody()}
          </tbody>
        </table>
      </div >
    </div >
  );
};

export default Listado;
