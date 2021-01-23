const data = require('../data.json');

module.exports = {
    getParty: (req, res) => {
        console.log("got here")
        res.status(200).send(data)
    }
}