import axios, { AxiosResponse } from 'axios';
import { RawData } from './types';

const api = axios.create();
const source = 'http://mipronostico.ideam.gov.co/IdeamWebApp2/Ideam/getData/reverse/reverse.php?cod=';
const proxy = 'https://api.allorigins.win/get?url=';

const HttpClient = {
  getData: async (id: string): Promise<AxiosResponse<RawData>> => {
    return await api.get(proxy + source + id);
  }
};

export default HttpClient;
