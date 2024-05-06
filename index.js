const express = require('express')
const bodyparser = require('body-parser');
const mongoose =require('mongoose')

const app =express();

mongoose.connect('mongodb://127.0.0.1:27017/marathondata',{}).then(()=>{
 console.log("db connected");
});

app.set("view engine","ejs");
 app.use(bodyparser.urlencoded({extended:true}))
 
 app.use(express.static("public"));

 app.use('/',require('./server/routes/routes'))









app.listen(7000,()=>console.log('port connected'))
