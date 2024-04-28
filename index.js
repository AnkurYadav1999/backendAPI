import app from './src/app.js'
import dotenv from 'dotenv'

dotenv.config({path:'./config.env'})

const startServer = () => {
    const port = process.env.PORT || 3000

    app.listen(port,()=>{
        console.log(`Server is running at port: ${3000}`)
    })
}

startServer()