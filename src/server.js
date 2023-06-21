require('dotenv').config();
const app = require('./app');
const { db } = require('./database/config');

db.authenticate()
  .then(() => console.log('Data base authenticated...🕵🏽‍♂️'))
  .catch((err) => console.log(err));

db.sync()
  .then(() => console.log('Data base synced ...🕵🏽‍♂️'))
  .catch((err) => console.log(err));

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Service runing on port ${PORT}... 👍...`);
});
