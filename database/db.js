const mongoose= require('mongoose');
const conexion= async ()=>{
try {
    await mongoose.connect(process.env.DB_CNN,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    });
    console.log('Base de datos en linea');
} catch (error) {
    console.log(error);
}}
module.exports={conexion};