const express = require('express')
const properties = require('./config/properties')
const db = require('./config/database')
const app = express()

db();

app.listen(properties.PORT, (req, res) => {
    console.log('Server up and running.')
})