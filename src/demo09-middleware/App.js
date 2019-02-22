import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { increment, decrement } from './actions';

class App extends Component {

  handleIncrement = () => {
    this.props.increment();
  }

  handleDecrement = () => {
    this.props.decrement();
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-center">{this.props.counter}</h1>
        <p className="text-center">
          <button onClick={this.handleIncrement} className="btn btn-primary mr-2">Increase</button>
          <button onClick={this.handleDecrement} className="btn btn-danger my-2">Decrease</button>
        </p>
      </div>
    );
  }
}

App.propTypes = {
  counter: PropTypes.number
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  };
}

export default connect(mapStateToProps, { increment, decrement })(App);
