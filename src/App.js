import React from 'react';
import {connect} from 'react-redux';
import * as actions from './actions';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      score: 1
    }
  }

  handleAddScore = () => {
    const {scoreAdd} = this.props;

    scoreAdd();
  }

  handleSubScore = () => {
    const {scoreSub} = this.props;

    scoreSub();
  }

  render(){
    return (
      <div className="App">
        <p>Score: <span>{this.props.score}</span></p>
        <button onClick={this.handleAddScore}>Add +</button>
        <button onClick={this.handleSubScore}>Sub -</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    score: state.score,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    scoreAdd : () => dispatch(actions.scoreAdd(1)),
    scoreSub : () => dispatch(actions.scoreSub(1))
  }
}

const ReduxApp = connect(mapStateToProps, mapDispatchToProps)(App)

export default ReduxApp;
