import { combineReducers } from 'redux';

const serviceTest = (state = '', action) => {
  switch (action.type) {
    case 'SUCCESSUFLLY_FETCHED_DATA':
      console.log(action.payload.data, 'here is the message inside of actions');
      return action.payload.data;
    case 'FAILED_TO_RETRIEVE_DATA':
      return action.err;
    default:
      return state;
  }
};


const rootReducer = combineReducers({
  serviceTest,
});

export default rootReducer;
