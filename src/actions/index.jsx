import { get, post } from 'api';

export const asyncGet = () => (dispatch) => {
  const config = {
    url: '/',
    timeout: 4000,
    onSuccess: completeFetchSuccessfully,
    onError: failedToCompleteFetch,
    headers: {
      'accept': 'application/json',
      'accept-language': 'en_US',
      'content-type': 'application/json',
    }
  };

  get(config.url, config, 'get').then((data) => {
    if(data.err) {
      return dispatch(failedToCompleteFetch(data));
    }
    dispatch(completeFetchSuccessfully(data));
  });
};


export const completeFetchSuccessfully = (message) =>{
  return {
    type: 'SUCCESSUFLLY_FETCHED_DATA',
    payload: {
      data: message,
    }
  };
};

export const failedToCompleteFetch = (err) =>{
  console.log(err);
  return {
    type: 'FAILED_TO_RETRIEVE_DATA',
    err: err.err || err || 'Internal Error',
  };
};
