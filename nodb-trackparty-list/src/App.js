import React, {Component} from 'react'
import './App.css';
import axios from 'axios'
import Banner from './components/Banner'
import Character from './components/Character'
import AddCharacter from './components/AddCharacter';

class App extends Component {
  constructor(){
    super()
    this.state = {
      party: []

    }
  }

  componentDidMount(){
    this.getParty()
  }

  getParty = () => {
    axios.get('/api/party/').then( response => {
      this.setState({
        party: response.data
      })
    })
  }

  render(){
    let characters = this.state.party.map(character => {
      return <Character character={character}/>
    })



    return (
      <div>
      <h1>Nate's mediocre app</h1>
      <Banner/>
      <AddCharacter/>
      {characters}
    </div>
    )
  
  }
}

export default App;
