/* eslint-disable @typescript-eslint/no-floating-promises */
import { useEffect, useState } from 'react';
import 'bootswatch/dist/sketchy/bootstrap.min.css';
import './styles/App.css';
import HttpClient from './HttpClient';
import Listado from './Listado';
import Pronostico from './interfaces/Pronostico';
import moment from 'moment';

function App (): JSX.Element {
  const [pronosticos, changePronosticos] = useState<Pronostico[]>([]);
  const [background, changeBackground] = useState<string>('');
  const [lugar, changeLugar] = useState<string>('');

  const backgroundStyle = { backgroundImage: `url(${background})`, backgroundSize: 'cover' };

  useEffect(() => {
    getData2('17001000');
  }, []);

  const getData2 = async (id: string): Promise<void> => {
    changeLugar(id);
    let data: Pronostico[] = [];
    changePronosticos(data);
    const response = await HttpClient.getData(id);
    if (response.status === 200) {
      changeBackground('');
      changeBackground(JSON.parse(response.data.contents).url);
      data = JSON.parse(response.data.contents).pronostico;
      data = modelData(data);
      changePronosticos(data);
    }
  };

  const modelData = (data: Pronostico[]): Pronostico[] => {
    const dias = 'Domingo,Lunes,Martes,Miercoles,Jueves,Viernes,Sábado'.split(',');
    return data.map((element: Pronostico) => {
      return {
        nombre: element.nombre,
        fecha: dias[parseInt(moment(element.fecha).format('d'))] + ' ' + moment(element.fecha).format('D'),
        hora: moment(element.hora, 'hh:mm').format('h:mm A'),
        url: element.url,
        temperature: element.temperature,
        poP: element.poP
      };
    });
  };

  const Child = (): JSX.Element => (
    <div>Hijo</div>
  );

  return (
    <div className="App" style={backgroundStyle}>
      <div className="titulo py-3 px-2">
        <div className="row">
          <div className="col-6">
            <div className="row">
              <div className="col">
                <p className="mb-1 h2">Pronóstico del tiempo</p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <button className={(lugar === '17777000') ? 'btn btn-success mx-1' : 'btn btn-info mx-1'}
                  onClick={() => { getData2('17777000'); }} >
                  Supía
                </button>
                <button className={(lugar === '17001000') ? 'btn btn-success mx-1' : 'btn btn-info mx-1'}
                  onClick={() => { getData2('17001000'); }} >
                  Manizales
                </button>
              </div>
            </div>
          </div>
          <div className="col-6">
            <img src="logo.png" width="80%" />
          </div>
        </div>
      </div >

      <Listado datos = {pronosticos}>
        <Child/>
      </Listado>
    </div>
  );
}

export default App;
