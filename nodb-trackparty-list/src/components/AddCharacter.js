import React, {Component} from 'react'
import axios from 'axios'

class AddCharacter extends Component{
    constructor(){
        super()
        this.state = {
            name: '',
            type: '',
            race: '',
            str: 0,
            dex: 0,
            con: 0,
            int: 0,
            wis: 0,
            cha: 0
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleAddCharacter = () => {
        axios.post('/api/party', this.state)
            .then( () => this.props.getPartyFn())
            .catch(err => console.log(err))
    }
    

    render(){
        console.log(this.state)
        return(
            <div>
                <h1>Add new characters here</h1>
                <input placeholder="name" name="name" onChange={ (e) => this.handleChange(e)}/>
                <input placeholder="class" name="type" onChange={ (e) => this.handleChange(e)}/>
                <input placeholder="race" name="race" onChange={ (e) => this.handleChange(e)}/>
                <input placeholder="Str" name="str" onChange={ (e) => this.handleChange(e)}/>
                <input placeholder="Dex" name="dex" onChange={ (e) => this.handleChange(e)}/>
                <input placeholder="Con" name="con" onChange={ (e) => this.handleChange(e)}/>
                <input placeholder="Int" name="int" onChange={ (e) => this.handleChange(e)}/>
                <input placeholder="Wis" name="wis" onChange={ (e) => this.handleChange(e)}/>
                <input placeholder="Cha" name="cha" onChange={ (e) => this.handleChange(e)}/>
                <button onClick={ () => this.handleAddCharacter()}>Add</button>
            </div>
        )
    }
}






export default AddCharacter