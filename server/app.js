//jshint esversion:6
// header('Access-Control-Allow-Origin: *');

const express = require("express");
const app = express();
var mongoose = require("mongoose");
const PORT = 5000;
const {MONGOURI} = require('./keys');

// import cors from "cors";
const cors = require('cors');
// const io = require("socket.io")({
//     allowEIO3: true
// });
app.use(cors());
// header('Access-Control-Allow-Credentials: true');


mongoose.set('strictQuery', true);
mongoose.connect(MONGOURI,{
    useNewUrlParser : true,
    useUnifiedTopology : true
});

mongoose.connection.on('connected',()=>{
    console.log("Connected");
});
mongoose.connection.on('err',(err)=>{
    console.log("err connecting",err);
});
app.use(
    express.urlencoded({ extended: true })
);
    

 require('./models/user');
 require("./models/recipe");
 require("./models/ChatModel");
 require("./models/MessageModel");
 
 app.use(express.json());


 const messageroute =require("./routes/messageroute");
 const chatroute = require("./routes/ChatRoute");

 app.use(require('./routes/auth'));
 app.use(require('./routes/recipe'));
 app.use(require('./routes/user'));

 app.use('/chat',chatroute)
 app.use('/message',messageroute) 

 


app.listen(PORT,()=>{
    console.log("Server is running at port 5000");
});


