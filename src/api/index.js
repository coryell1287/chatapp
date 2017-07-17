import axios from 'axios';

let host = 'http://localhost:4000/rest';

async function httpRequest(method, url, config) {
  try {
    const { data } = await axios[method](url, config);
    console.log(data, 'Here is the results of data');
    return await config[onSuccess](data);
  } catch (err) {
    return config[onError](err);
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
  return httpRequest('PATCH', `${host}${basePath}`, request, config);
};
