import * as axios from 'axios';

const instance = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com/',
});

export const todoApi = {
	getTodos(limit = 5, page = 1) {
		return instance.get(`todos?_limit=${limit}&_page=${page}`).then((res) => {
			return res.data;
		});
	},
};
