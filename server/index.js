const express = require('express')
const dotenv = require('dotenv')
const connectToMongo = require('./db')
const cors = require('cors')

const app = express()
dotenv.config()
connectToMongo()

app.use(express.json())
app.use(cors())

//Routes
app.get('/',(req,res) => {
    res.send("This is backend")
})

app.use('/users', require('./routes/users'))
app.use('/notes', require('./routes/notes'))

app.listen(process.env.PORT,()=>{
    console.log(`Server is running at port ${process.env.PORT}`)
})
