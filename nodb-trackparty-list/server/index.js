const express = require('express');
const app = express();

app.use(express.json());

// ENDPOINTS
const partyCtrl = require('./partyCtrl')
app.get('/api/party/', partyCtrl.getParty)
app.post('/api/party', partyCtrl.addCharacter)
app.put('/api/party/:id', partyCtrl.updateCharacter)
app.delete('/api/party/:id', partyCtrl.deleteCharacter)


app.listen(5557, () => console.log('bingpot on port 5557'))