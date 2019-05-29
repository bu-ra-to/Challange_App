import React from 'react';
import { connect } from 'react-redux';
import { createChallangeName } from '../components/actions/actions';
import CreateChallangeForm from './CreateChallange';

class StartChallange extends React.Component {
  runAction = re => {
    // console.log(formValues.title);
    this.props.createChallangeName(re);
  };
  render() {
    return (
      <div>
        <CreateChallangeForm onSubmit={this.runAction} />
        {/* <button onClick={this.props.createChallangeName}>Click</button> */}
        <div>Lets begin...</div>
      </div>
    );
  }
}

export default connect(
  null,
  { createChallangeName }
)(StartChallange);
