const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())

const irgen = 'Irgen'


// need to implement database stuff in the server!!!!

const PORT = 3333;

app.get('/', (req, res) => {
    res.send(`${irgen} says Hello World!`)
  })
  
  app.listen(PORT, () => {
    console.log(`Push app listening on port ${PORT}`)
  })
