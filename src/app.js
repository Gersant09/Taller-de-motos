const express = require('express');
//routes
const usersRouter = require('./routes/products.routes')

const app = express();
app.use(express.json());

app.use((req, res, next)=>{
    const time = new Date().toISOString()
    req.requestTime = time;
    next();
    
    })


app.use('/api/v1/users', usersRouter)
//app.use('/api/v1/users', repairsRouter)


app.listen(4000, () => {
    console.log("servicio corriendo en el puerto 4000 👍")
})