const data = require('../data.json');
let party = []
let characterId = 0

module.exports = {
    getParty: (req, res) => {
        // console.log("got here")
        res.status(200).send(party)
    },

    addCharacter: (req, res) => {
        const characterObj = {...req.body, characterId}
        party = [...party, characterObj]
        characterId++
        // console.log(party)
        res.sendStatus(200)

    },

    updateCharacter: (req, res) => {
        const { id } = req.params;
        console.log(id)
        const foundIndex = party.findIndex( e => e.characterId === +id)
        if(foundIndex === -1){
            // console.log(foundIndex)
            return res.status(404).send('This dude is does not exist')
        }
        const updatedCharacterData = {...party[foundIndex], name: req.body.nameInput}
        party.splice(foundIndex, 1, updatedCharacterData)
        res.sendStatus(200)
    },

    deleteCharacter: (req, res) => {
        const { id } = req.params;
        let foundIndex = party.findIndex( e => e.characterId === +id)
        party.splice(foundIndex, 1)
        res.status(200).send(party)
    }
}