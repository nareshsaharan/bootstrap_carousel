const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))


const port = process.env.PORT || 3000

app.use(express.static(__dirname + "/public"))

app.listen(port, () => console.log(`Active on ${port} port`))