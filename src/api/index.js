import axios from 'axios';
import { store } from 'store/configureStore';

const { dispatch } = store;
let host = 'http://localhost:4000/rest';

async function httpRequest(method, url, config) {
  try {
    const { data } = await axios[method](url, config);
    return await dispatch(config["onSuccess"](data));
  } catch (err) {
    return await dispatch(config["onError"](err));
  }
}

export const get = (basePath, config) => {
  return httpRequest('get', `${host}${basePath}`, config);
};

export const post = (basePath, request, config) => {
  return httpRequest('post', `${host}${basePath}`, request, config);
};

export const remove = (basePath, request, config) => {
  return httpRequest('delete', `${host}${basePath}`, request, config);
};

export const put = (basePath, request, config) => {
  return httpRequest('put', `${host}${basePath}`, request, config);
};

export const patch = (basePath, request, config) => {
  return httpRequest('patch', `${host}${basePath}`, request, config);
};
