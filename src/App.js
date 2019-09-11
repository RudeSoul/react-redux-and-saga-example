import React from 'react';
import {connect} from 'react-redux';
import * as actions from './actions';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: 1
    }
  }

  handleAddData = () => {
    const {requestImage, data} = this.props;

    requestImage(data + 1);
  }

  handleSubData = () => {
    const {requestImage, data} = this.props;

    requestImage(data - 1);
  }

  render(){
    const {data, image} = this.props;

    return (
      <div className="App">
        <img src={image} alt="Profile" />
        <p>Data: <span>{data}</span></p>
        <button onClick={this.handleAddData}>Add +</button>
        <button onClick={this.handleSubData}>Sub -</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.data,
    image: state.image
  }
}

const mapDispatchToProps = dispatch => {
  return {
    requestImage : (data) => dispatch(actions.requestImage(data))
  }
}

const ReduxApp = connect(mapStateToProps, mapDispatchToProps)(App)

export default ReduxApp;
