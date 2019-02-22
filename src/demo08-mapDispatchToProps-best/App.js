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
    // Step2 查看目前 props 值
    console.log('App props is ', this.props);
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
  console.log('state = ', state);
  return {
    counter: state.counter
  };
}

// Step1 傳入物件 至 connect 第二個參數

// 如果有多個 action creator 時，可以使用 
// import * as actions from './actions'
// export default connect(mapStateToProps, actions )(App);

export default connect(mapStateToProps, { increment, decrement })(App);
