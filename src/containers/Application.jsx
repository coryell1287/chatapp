import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPostsIfNeeded, invalidateReddit, selectReddit } from 'actions';
import { mapDispatchToProps, mapStateToProps } from 'containers/propConfig';

class Application extends Component {

  componentDidMount() {
    const { asyncGet } = this.props;
    asyncGet();
  }


  render() {
    // const { testService: { serviceTestReducer } } = this.props;
    console.log(this.props, 'this is the value of the props');
    return (
      <div>
        <h1>Service test</h1>
        <div><span></span></div>

      </div>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Application)
