import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.codenation.dev/v1/challenge/dev-ps/',
});

export default api