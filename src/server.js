const app = require('./app')
const {db} = require("./database/config")

db.authenticate()
.then(()=>console.log("Data base authenticate"))
.catch((err)=>console.log(err));

db.sync()
.then(()=>console.log("Data base synced"))
.catch((err)=>console.log(err))


app.listen(4000, () => {
    console.log("servicio corriendo en el puerto 4000 👍");
  });