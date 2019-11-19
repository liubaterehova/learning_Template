import { API_URL } from '../index';
import axios from 'axios';

const http = axios.create();

const makeCustomApi = ({client, headersManager}) => ({
    // getNotification: data =>
    //     http.post(`${API_URL}/boston`, { ...data }),
});

export default makeCustomApi;
