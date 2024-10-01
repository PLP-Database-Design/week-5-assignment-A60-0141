// import some dependencies/ packages


//HTTP framework for handling request
const express = require('express');
//instance of express framework
const app = express();
//DBMS Mysql
const mysql = require('mysql2');
//cross origin resourse sharing
const cors = require('cors');
//Environmental variable doc
const dotenv = require('dotenv');

app.use(express.json());
app.use(cors());
dotenv.config();

//CONNECTION TO THE DATABASE
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user:process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

// CHECK IF THERE IS CONNECTION

db.connect((err)=>{
  // if no connection
  
   if(err) return console.log("Error connecting to MYSQL");

   //IF CONNECTION WAS SUCCESSFULL
   console.log("connect to MYSQL as id: ", db_threadId);
})

// your code goes down here
//
//
//your code goes up there

//start the server

   app.listen(process.env.PORT, () => {
     console.log(`server is listening on port ${process.env.PORT}`);

     //sending a message to the browser
     console.log('sending message to the browser...');
     app.get('/', (req,res)=>{
        res.send('server started successfully!');
     });

   });
