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
    const { fetchState, serviceState } = this.props;
    console.log(this.props.fetchState, 'this is the value of the props');
    return (
      <div>
        <div>
          <h1>Service test</h1>
          <div>
            <span>{serviceState}</span>
          </div>
        </div>
      </div>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Application)
