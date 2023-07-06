const express = require('express');
const cors = require('cors');
const globalErrorHandler = require('./controllers/error.controller');

const usersRouter = require('./routes/users.routes');
const repairsRouter = require('./routes/repairs.routes');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/v1/users', usersRouter);
app.use('/api/v1/repairs', repairsRouter);

app.all('*', (req, res, next) => {
  return next(new AppError(`Cant find ${req.originalUrl} on this server`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
