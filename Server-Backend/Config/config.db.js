const dbconnect = require("mysql2");

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
  /* app.get('/createdb', (req, res) => {
     let sql = 'CREATE DATABASE kassie';
      dbconnect.query(sql, (err, result) => {
          if(err) { 
             throw err;
         }
         console.log(result);
         res.send('database created....');
       });
    }); */
  //////////////////////////////////////////////////////////////////////////////////////////////////////////

  module.exports = dbconnect;
