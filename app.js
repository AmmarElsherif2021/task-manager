
const connectDb = require('./db/connect')
const express = require('express');
const tasks = require('./routes/tasks')
require('dotenv').config()
const notFound = require('./middleware/notFound')
const app = express();

//middlewares
app.use(express.json())
app.use('/api/v1/tasks', tasks);
app.use(express.static('./public'))
app.use(notFound)

//render only if db is connected
const start = async () => {
    const port = 3000;
    try {
        await connectDb(process.env.MONGO_URI)
        app.listen(port, () => console.log(`app is listening to port: ${port}`));
    } catch (err) {
        console.log(`! ------> ${err}`)
    }
}
start()