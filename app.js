const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const app = express();
const bodyparser=require('body-parser');
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/api', require('./routes/main.routes'));
app.use('/api/aplication', require('./routes/aplications.routes'));
app.use('/api/authorization', require('./routes/authorizacions.routes'));
app.use('/api/logs', require('./routes/logs.routes'));

module.exports = app;
