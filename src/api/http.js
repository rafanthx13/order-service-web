import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000/'

let http = axios.create({
	baseURL: 'http://localhost:8000/',
	headers: {
		'Content-Type': 'application/json',
	}
});

export default http;