const express = require('express')
const router = require('./routes')
const bodyParser = require('body-parser')

let app = express() 
app.use(bodyParser.json())
app.use(router)
const port = 1234

app.listen(port, () => {
    console.log(`server listening on port ${port}...`)
})