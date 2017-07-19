import { bindActionCreators } from 'redux'
import * as action from 'actions';

export function mapStateToProps(state) {
  return {
    serviceState: state.serviceState.serviceTestReducer,
    fetchState: state.serviceState.progressIndicator,
  }
}

export function mapDispatchToProps(dispatch) {
  return bindActionCreators(action, dispatch);
}