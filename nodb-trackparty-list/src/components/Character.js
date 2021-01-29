import axios from 'axios'
import React, {Component} from 'react'
import './Character.css'

class Character extends Component{
    constructor(props){
        super(props)
        this.state = {
            nameInput: ""
        }
        
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    updateName = () => {
        const {characterId} = this.props.character
        axios.put(`/api/party/${characterId}`, {nameInput: this.state.nameInput})
            .then( res => this.props.getPartyFn())
            .catch( err => console.log(err))
    }
    killCharacter = () => {
        const {characterId} = this.props.character
        axios.delete(`/api/party/${characterId}`)
        .then( res => this.props.getPartyFn())
        .catch( err => console.log(err))
    }

    render(){
        const {name, type, race, str, dex, con, int, wis, cha} = this.props.character;

        return(
            <div className="character-card">
                <button onClick={ () => this.killCharacter()}>Delete character</button>
                <div className="card-details">
                    <div>
                        <h1>Character: {name}</h1>
                        <input value={this.state.nameInput} placeholder="change name" name="nameInput" onChange={ (e) => this.handleChange(e)}/>
                        <button onClick={ () => this.updateName()}>Update</button>
                        <h1>Class: {type}</h1>
                        <h1>Race: {race}</h1>
                    </div>
                    <div>
                        <h1>Str: {str}</h1>
                        <h1>Dex: {dex}</h1>
                        <h1>Con: {con}</h1>
                        <h1>Int: {int}</h1>
                        <h1>Wis: {wis}</h1>
                        <h1>Cha: {cha}</h1>
                    </div>
                </div>
            </div>
        )
    }
}


export default Character