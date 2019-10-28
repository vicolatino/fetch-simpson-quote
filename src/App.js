import React from 'react';
import logo from './logo.svg';
import './App.css';
import DisplaySimpson from './components/DisplaySimpson'
import axios from 'axios';

const simpsonsQuote = [
  {
    "quote": "And this is the snack holder where I can put my beverage or, if you will, cupcake.",
    "character": "Homer Simpson",
    "image": "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
    "characterDirection": "Right"
  }
]


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      character: "" 
    }
    this.getCharacter = this.getCharacter.bind(this);
  }
    getCharacter (){
      // Send the request
      axios.get('https://quests.wilders.dev/simpsons-quotes/quotes')
        // Extract the DATA from the received response
        .then(response => response.data)
        // Use this data to update the state
        .then(data => {
          this.setState({character: data[0]})
        })
  }

  render(){
    return (
      <div className="App">
        <DisplaySimpson character={this.state.character} />
        <button type="button" onClick={this.getCharacter}>Get Character</button>
      </div>
    );
  }
}


export default App;
