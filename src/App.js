import React, { Component } from 'react';
import * as marked from 'marked';
import renderHTML from 'react-render-html';
import './App.css';

const TextArea = props => {
 return (
   <div className="text-input-container">
     <textarea onChange={props.onChangeHandler} ></textarea>
   </div>
 )
};

class App extends Component {
  constructor () {
    super();

    this.state = {
      inputText: ''
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler (e) {
    this.setState({
      inputText: marked(e.target.value)
    });
  }

  render() {
    return (
      <div className="App">
        <TextArea onChangeHandler={this.onChangeHandler} />
        <div className="text-output-container">
          {renderHTML(this.state.inputText)}
        </div>
      </div>
    );
  }
}

export default App;
