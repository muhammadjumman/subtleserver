const express = require('express')
const app = express()

const port = process.env.PORT || 8080

app.get('/', (req, res)=>{
    res.send('Hello Subtle')
})

app.listen(port, ()=>{
    console.log('open port 80')
})