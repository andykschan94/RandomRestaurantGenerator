import axios from 'axios';
import config from '../config/index';

export const getRestaurant = async () => {
  const { data } = await axios.get(`${config.backendEndpoint}/restaurant`);

  return data;
};

export const postRestaurant = async (params) => {
  const { data } = await axios.post(`${config.backendEndpoint}/restaurant/create`, params);

  return data;
};