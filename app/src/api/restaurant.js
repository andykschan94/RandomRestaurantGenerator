import axios from 'axios';
import config from '../config/index';

export const getRestaurant = async token => {
  const { data } = await axios.get(`${config.backendEndpoint}/get`, {
    headers: { Authorization: token }
  });

  return data;
};

export const postRestaurant = async (params, token) => {
  const { data } = await axios.post(`${config.backendEndpoint}/create`, params, {
    headers: { Authorization: token }
  });

  return data;
};