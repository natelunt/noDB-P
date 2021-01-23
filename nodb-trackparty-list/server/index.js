const express = require('express');
const app = express();

app.use(express.json());

// ENDPOINTS
const partyCtrl = require('./partyCtrl')
app.get('/api/party/', partyCtrl.getParty)

app.listen(5557, () => console.log('bingpot on port 5557'))