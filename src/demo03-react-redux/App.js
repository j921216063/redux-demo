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

// Step2 定義 mapStateToProps 函式，會傳應用程式的 state，並回傳一個物件，物件屬性會成為組件的 props
// state 值，等於 store.getState() 
const mapStateToProps = (state) => {
  console.log(`state = ${state}`);
  return {
    counter: state
  };
}

// Step3 傳入 mapStateToProps 至第一個參數，並且將要綁定的組件傳入至產生的函數。 
export default connect(mapStateToProps)(App);
