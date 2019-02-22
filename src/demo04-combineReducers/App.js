import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-center">{this.props.counter}</h1>
        <p className="text-center">
          <button className="btn btn-primary mr-2">Increase</button>
          <button className="btn btn-danger my-2">Decrease</button>
        </p>
      </div>
    );
  }
}

App.propTypes = {
  counter: PropTypes.number
}

// Step3: state 與 combineReducers 定義的 key 結構一致
const mapStateToProps = (state) => {
  console.log('state = ', state);
  return {
    counter: state.counter
  };
}

export default connect(mapStateToProps)(App);
