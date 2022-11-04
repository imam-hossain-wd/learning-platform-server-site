const express = require('express')
const app = express()
const port = process.env.PORT  || 5000;
const cors = require('cors')
// const categories = require('./data/categories.json')
const courses = require('./data/courses.json')

app.use(cors())

app.get('/courses', (req, res) => {
  res.send(courses)
})

app.get('/courses/:id', (req, res) => {
    const findCourse = courses.find(s => s.id === req.params.id)
  res.send(findCourse)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 