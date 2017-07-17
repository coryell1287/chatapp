import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectReddit, fetchPostsIfNeeded, invalidateReddit } from 'actions';
import Picker from 'components/Picker';
import Posts from 'components/Posts';
import { mapStateToProps, mapDispatchToProps } from 'containers/propConfig'

class Application extends Component {

  componentDidMount() {
    const { asyncGet } = this.props;
    console.log(this.props);
    asyncGet();
  }


  render() {
    return (
      <div>
        <h1>Service test</h1>
        <div><span>{this.props.testService}</span></div>

      </div>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Application)
