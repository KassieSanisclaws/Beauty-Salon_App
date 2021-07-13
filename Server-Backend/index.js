// const path = require("path");
const express = require('express');
const mysql = require("mysql2");
const bodyParser = require('body-parser');

// The below api imports user routes.//
//const userRouter = require("./routes/userRouter");

// create express application. //
const app = express();

////////////////////////////////////////////////////////////////////////////////////////////////////////
// Below is mysql connection to database. //
const dbconnect = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'beautysalon',
 password  : 'KBzK35*71211',
 });
 // connection string/path(title) //
 dbconnect.connect(function(error) {
  if(error) throw error;
  console.log("My SQL Database Connected Successfully");
});
// create database by name(Test command): //
/*  app.get('/createdb', (req, res) => {
   let sql = 'CREATE DATABASE kassie';
    dbconnect.query(sql, (err, result) => {
        if(err) { 
           throw err;
       }
       console.log(result);
       res.send('database created....');
     });
  });*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////
// parse request data content type application/json. //
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', "Content-Type, Accept, X-Requested-With, Origin");
  next();
});

// create api routes. // 
//app.use('/api/employee', employeeRouter);
//app.use('/api/user', userRouter);


// server route deplolyed @ message. //
 app.get('/', (req, res) => {
  res.send("server is ready");
});

// error handler message api. //
 app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

// server port setup. //
const port = process.env.PORT || 54441;
app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
}); 
module.exports = app;



// Sample/Test code Below. //
//////////////////////////////////////////////////////////////////////////////////////////////////////
/*const employeeRouter = require('./routes/employeeRouter');
const userRouter = require('./routes/userRouter');
//////////////////////////////////////////////////////////////////////////////////////////////////////
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  


 


*/
///////////////////////////////////////////////////////////////////////////////////////////////////////
// app.use('/api/users', userRouter); //

// const __dirname = path.resolve(); //
/* app.use('/uploads', express.static(path.join(__dirname, '/uploads'))); // (this line is picture uploads)
 app.get('', (req, res) => {
  res.send('server is ready');
});*/

/////////////////////////////////////////////////////////////////////////////////////////////////////
// middleware test log.//
/*app.use((req, res, next) => {
  console.log('First middleware');
  next();
});

app.use((req, res, next) => {
  res.send("Hello from express backend!");
});*/
////////////////////////////////////////////////////////////////////////////////////////////////////////






 
   







