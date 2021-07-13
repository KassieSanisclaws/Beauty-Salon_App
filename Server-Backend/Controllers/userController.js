const UserModel = require("../models/userModel");

// get user list. (api-working)//
 exports.getUsersList = (req, res)=> {
    //console.log('here all employees list');
    UserModel.getAllUsers((err, users) =>{
        console.log("Displaying List Of:");
        if(err)
        res.send(err);
        console.log('Users', users);
        res.send(users)
    })
}
///////////////////////////////////////////////////////////////////////////////////////
// geat user by ID. (api-working)//
 exports.getUserByID = (req, res)=>{
    //console.log('get emp by id');
    UserModel.getUserByID(req.params.id, (err, user)=>{
        if(err)
        res.send(err);
        console.log('single user data',user);
        res.send(user);
    })
}
///////////////////////////////////////////////////////////////////////////////////////
// create new user. (api-working)//
 exports.createNewUser = (req, res) => {
    const userReqData = new UserModel(req.body);
    console.log('userReqData', userReqData);
// check for null. //
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.send(400).send({ success: false, message: "please fill in all fields"});
} else {
   UserModel.createUser(userReqData, (err, user) => {
       if(err)
      res.send(err);
      res.json({ status:true, message: "User Created Successfully", data: user.insertId })
    })
  }
} 
////////////////////////////////////////////////////////////////////////////////////////
// update user. (api-working)//
 exports.updateUser = (req, res)=>{
    const userReqData = new userModel(req.body);
    console.log('userReqData update', userReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        UserModel.updateUser(req.params.id, userReqData, (err, user)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'User updated Successfully'})
        })
    }
}
///////////////////////////////////////////////////////////////////////////////////////
// delete user. //
 exports.deleteUser = (req, res) => {
    UserModel.deleteUser(req.params.id, (err, user) => {
        if(err)
        res.send(err);
        res.json({ success: true, message: "User Deleted Successfully!."});
    })
}
