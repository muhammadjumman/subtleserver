const express = require('express')
const app = express()

app.get('/', (req, res)=>{
    res.send('Hello Subtle')
})

app.listen(8080, ()=>{
    console.log('open port 80')
})