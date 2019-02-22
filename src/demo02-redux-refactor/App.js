import React, { Component } from 'react';
import PropTypes from 'prop-types';

class App extends Component {
  handleIncrease = () => {
    this.props.onIncrement();
  }

  handleDecrease = () => {
    this.props.onDecrement();
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-center">{this.props.value}</h1>
        <p className="text-center">
          <button onClick={this.handleIncrease} className="btn btn-primary mr-2">Increase</button>
          <button onClick={this.handleDecrease} className="btn btn-danger my-2">Decrease</button>
        </p>
      </div>
    );
  }
}

App.propTypes = {
  value: PropTypes.number.isRequired
};

export default App;
