const express = require('express')
const app = express()
const port = process.env.PORT  || 5000;
const cors = require('cors')


app.use(cors())


app.get('/', (req, res) => {
  res.send('we love Allah...')
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 