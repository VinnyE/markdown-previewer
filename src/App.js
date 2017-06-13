import React, { Component } from 'react';
import * as marked from 'marked'
import './App.css';

const TextArea = props => {
 return (
   <div>
     <textarea cols="30" rows="10" onChange={props.onChangeHandler} ></textarea>
   </div>
 )
}

class App extends Component {
  constructor () {
    super()

    this.state = {
      inputText: ''
    }

    this.onChangeHandler = this.onChangeHandler.bind(this)
  }

  onChangeHandler (e) {
    console.log(e.target.value)
    this.setState({
      inputText: marked(e.target.value)
    })
  }

  render() {
    return (
      <div className="App">
        <TextArea onChangeHandler={this.onChangeHandler} />
        <div>
          {this.state.inputText}
        </div>
      </div>
    );
  }
}

export default App;


// 1. User types something into the text area.
// 2. On change gather text in text area 
// 3. Display text in another div.