require('dotenv').config();
const { init } = require('express/lib/application');
const app = require('./app');
const { db } = require('./database/config');
const initModel = require('./models/initModel');

db.authenticate()
  .then(() => console.log('Data base authenticated...🕵🏽‍♂️'))
  .catch((err) => console.log(err));

initModel();

db.sync()
  .then(() => console.log('Data base synced ...🕵🏽‍♂️'))
  .catch((err) => console.log(err));

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Service runing on port ${PORT}... 👍...`);
});
