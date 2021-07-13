const dbconnect  = require('../config/db.config');

const User = function(user){
    this.first_name      =   user.first_name;
    this.last_name       =   user.last_name;
    this.email           =   user.email;
    this.phone_number    =   user.phone_number;
    this.password        =   user.password;
    this.isAdmin         =   user.isAdmin;
    this.salary          =   user.salary;
    this.user_status     =   user.user_status ? user.user_status : 1;  
    this.created_at      =   new Date();
    this.updated_at      =   new Date();
}

// get all user data. //
User.getAllUsers = (result) =>{
    dbconnect.query('SELECT * FROM users WHERE is_deleted=0', (err, res)=>{
        if(err){
            console.log("Error fetching users", err);
            result(null,err);
        }else{
            console.log("Users fetched successfully");
            result(null,res);
        }
    })
}

// get user by ID from data base. //
User.getUserByID = (id, result)=>{
    dbconnect.query('SELECT * FROM users WHERE id=?', id, (err, res)=>{
        if(err){
            console.log("Error fetching users by id", err);
            result(null, err);
        }else{
            result(null, res);
        }
    })
}

// create new user to database. //
User.createUser = (userReqData, result) =>{
    dbconnect.query('INSERT INTO users SET ? ', userReqData, (err, res)=>{
        if(err){
            console.log("Error inserting data");
            result(null, err);
        }else{
            console.log("User profile created successfully");
            result(null, res)
        }
    })
}

// update user
User.updateUser = (id, userReqData, result)=>{
    dbconnect.query("UPDATE users SET first_name=?,last_name=?,email=?,phone_number=?,password=?,isAdmin=?,salary=? WHERE id = ?", 
                 [userReqData.first_name,userReqData.last_name,userReqData.email,userReqData.phone_number,userReqData.password,
                  userReqData.isAdmin,userReqData.salary, id], (err, res)=>{
        if(err){
            console.log("Error updating the user records");
            result(null, err);
        }else{
            console.log("User records updated successfully");
            result(null, res);
        }
    });
}

// delete employee.//
//(this code is hard delete from database)// 
User.deleteUser = (id, result) => {
    /* dbConn.query('DELETE FROM employees WHERE id=?', [id], (err, res)=>{
         if(err){
             console.log('Error while deleting the employee');
             result(null, err);
         }else{
             result(null, res);
        }
     }) */
     //second is a soft delete from the database).//
   /**/ dbconnect.query("UPDATE users SET is_deleted=? WHERE id = ?", [1, id], (err, res) => {
        if(err){
            console.log("Error Deleting the user");
            result(null, err);
        }else{
            console.log("User Deleted successfully");
            result(null, res);
        }
    });
}

module.exports = User;