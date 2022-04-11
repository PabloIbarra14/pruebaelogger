
require('mandatoryenv').load([
    'DB_CNN',
    'PORT',
]);

const {conexion}=require('./database/db.js');
conexion();

const app = require('./app');

app.listen(process.env.PORT, () => {
    console.log("Listening on port: " + process.env.PORT);
});