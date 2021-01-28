import React, {Component} from 'react'

class AddCharacter extends Component{
    constructor(){
        super()
        this.state = {

        }
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    

    render(){
        console.log(this.state)
        return(
            <div>
                <h1>Add new characters here</h1>
                <input placeholder="name" name="Name" onChange={ (e) => this.handleChange(e)}/>
                <input placeholder="class" name="Class" onChange={ (e) => this.handleChange(e)}/>
                <input placeholder="race" name="Race" onChange={ (e) => this.handleChange(e)}/>
                <input placeholder="Str" name="Str" onChange={ (e) => this.handleChange(e)}/>
                <input placeholder="Dex" name="Dex" onChange={ (e) => this.handleChange(e)}/>
                <input placeholder="Con" name="Con" onChange={ (e) => this.handleChange(e)}/>
                <input placeholder="Int" name="Int" onChange={ (e) => this.handleChange(e)}/>
                <input placeholder="Wis" name="Wis" onChange={ (e) => this.handleChange(e)}/>
                <input placeholder="Cha" name="Cha" onChange={ (e) => this.handleChange(e)}/>
            </div>
        )
    }
}






export default AddCharacter