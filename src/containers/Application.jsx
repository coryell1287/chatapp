import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPostsIfNeeded, invalidateReddit, selectReddit } from 'actions';
import { mapDispatchToProps, mapStateToProps } from 'containers/propConfig';

class Application extends Component {

  componentWillMount() {
    const { asyncGet } = this.props;
    asyncGet();
  }


  render() {
    const { fetchState } = this.props;
    console.log(this.props.fetchState, 'this is the value of the props');
    return (
      <div>
        {
          fetchState
            ?
            'Loading...'
            :
            <div>
              <h1>Service test</h1>
              <div><span></span></div>

            </div>
        }
      </div>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Application)
