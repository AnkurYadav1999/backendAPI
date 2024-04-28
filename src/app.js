import express from 'express'

const app = express()

// Routes 

app.get('/',(req,res)=>{
    res.send("<h1>This is home page</h1>")
})

export default app;