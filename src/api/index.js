import axios from 'axios';

let host = 'localhost:4000/rest/';

async function httpRequest(method, url, payload, config) {
  try {
    const { data } = await axios[method](url, payload, config);
    return await dispatch(config[onSuccess](data));
  } catch (err) {
    return dispatch(config[onFail]());
  }
}

export const get = (basePath, config) => {
  return httpRequest('GET', `${host}${basePath}`, config);
};

export const post = (basePath, request, config) => {
  return httpRequest('POST', `${host}${basePath}`, request, config);
};

export const remove = (basePath, request, config) => {
  return httpRequest('DELETE', `${host}${basePath}`, request, config);
};

export const put = (basePath, request, config) => {
  return httpRequest('PUT', `${host}${basePath}`, request, config);
};

export const patch = (basePath, request, config) => {
  return httpRequest('PATCH', `${host}${basePath}`, request, config);
};
