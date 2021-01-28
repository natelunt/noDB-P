import React, {Component} from 'react'
// import './Character.css'

class Character extends Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
        
    }

    render(){
        const { character_img, character_name, character_class, character_race, base_stat} = this.props.character;
        const { str, dex, con, int, wis, cha} = base_stat;
        return(
            <div className="character-card">
                <h1>Character {character_name}</h1>
                <h1>Character {character_class}</h1>
                <h1>Character {character_race}</h1>
                <h1>Character {str}</h1>
                <h1>Character {dex}</h1>
                <h1>Character {con}</h1>
                <h1>Character {int}</h1>
                <h1>Character {wis}</h1>
                <h1>Character {cha}</h1>
            </div>
        )
    }
}


export default Character