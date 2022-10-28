const express = require('express')
const app = express()
const port = process.env.PORT  || 5000;
const cors = require('cors')
const categories = require('./data/categories.json')
const courses = require('./data/courses.json')


app.use(cors())


app.get('/', (req, res) => {
  res.send('we love Allah...')
})

app.get('/categories', (req, res) => {
  res.send(categories)
})
app.get('/courses', (req, res) => {
  res.send(courses)
})

app.get('/category/:id', (req, res) => {
  const id = req.params.id;
  const category_news = news.filter(n => n.category_id === id);
  res.send(category_news);
  
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 