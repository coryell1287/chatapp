import { bindActionCreators } from 'redux'
import * as action from 'actions';

export function mapStateToProps(state) {
  return {
    testService: state.serviceTest,
  }
}

export function mapDispatchToProps(dispatch) {
  return bindActionCreators(action, dispatch);
}