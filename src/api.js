import axios from 'axios';

const BASE_URL = 'https://api.tvmaze.com';

export const searchShow = async (query) => {
	try {

		const response = await axios.get(`${BASE_URL}/search/shows?q=${query}`);
		return response.data;

	} catch(err) {
		
		console.error(err)
		throw "error";
	};
}

export default searchShow;