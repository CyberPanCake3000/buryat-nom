import axios from 'axios';

const apiUrl = process.env.API_ARTICLES_TEST;
const apiToken = process.env.API_TOKEN;

const api = axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization: `Bearer ${apiToken}`
  }
});

const getData = async () => {
  try {
    const response = await api.get('/content-type');
    console.log("test", response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

getData();
