require('dotenv').config()
const express = require('express')
const app = express()

// .env me PORT na ho to 4000 use karo
const port = process.env.PORT || 4000

const githubdata = 

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('farooq sultan')
})

app.get('/login', (req, res) => {
    res.send('<h1>Please login at Chai or Code</h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h2>Awan group</h2>')
})

app.get('/github', (req, res) => {
    res.json(githubdata)
})

// Using correct port
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
