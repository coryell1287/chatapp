import { combineReducers } from 'redux';

const serviceTestReducer = (state = '', action) => {
  switch (action.type) {
    case 'SUCCESSUFLLY_FETCHED_DATA':
      // const { message } = action.payload.data;
      return action.payload.data.message;
    case 'FAILED_TO_RETRIEVE_DATA':
      return action.err;
    default:
      return state;
  }
};

const progressIndicator = (state = false, action) => {
  switch (action.type) {
    case 'START_FETCHING':
      return true;
    case 'STOP_FETCHING':
      return false;
    default:
      return state;
  }
};


export default combineReducers({
  serviceTestReducer,
  progressIndicator,
});
