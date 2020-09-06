const express = require('express')
const app = express()
app.listen(3000,()=>console.log('server running at 3000'))
app.use(express.static('public'));
app.use(express.json({limit: '1mb'}));

const alldata=[]

app.post('/api',(req,res)=>{
    const data = req.body
    alldata.push(data)
    res.json(alldata)
    console.log(alldata)
})