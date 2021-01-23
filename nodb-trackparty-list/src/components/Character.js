import React, {Component} from 'react'

class Character extends Component{
    constructor(){
        super()
        this.state = {
            
        }
        
    }

    render(){
        return(
            <div>
                <h1>Character {this.props.character.character_name}</h1>
                <h1>Character {this.props.character.character_class}</h1>
                <h1>Character {this.props.character.character_race}</h1>
                <h1>Character {this.props.character.base_stat.str}</h1>
                <h1>Character {this.props.character.base_stat.dex}</h1>
                <h1>Character {this.props.character.base_stat.con}</h1>
                <h1>Character {this.props.character.base_stat.int}</h1>
                <h1>Character {this.props.character.base_stat.wis}</h1>
                <h1>Character {this.props.character.base_stat.cha}</h1>
            </div>
        )
    }
}


export default Character