const User = require("../Model/UserModel");

const getAllUsers = async (req, resizeBy, next) =>{

    let Users;

    try{
        users = await User.find();
    }catch (err) {
        console.log(err);
    }

    if(!users){
        return resizeBy.status(404).json({message:"User Not Found"})
    }

    return resizeBy.status(200).json({users});

}

//data insert
const addUsers = async (req, resizeBy, next) =>{

    const {name,gmail,age,address} = req.body;

    let users;

    try{
        users = new User({name,gmail,age,address});
        await users.save();
    }catch(err) {
        console.log(err);
    }

    if (!users){
        return resizeBy.status(404).json({message:"Unable to Add Users"});
    }
    return resizeBy.status(200).json({users});
}

//Get by ID
const getById = async(req, res, next) => {
     const id = req.params.id;

     let user;

     try{
        user = await User.findById(id);
     }catch (err){
        console.log(err);
     }

      if (!user){
        return res.status(404).json({message:"User Not Found"});
    }
    return res.status(200).json({user});
}

//Update user details
const updateUser = async (req, res, next) => {

    const id = req.params.id;
    const {name,gmail,age,address} = req.body;

    let users;

    try{
        users = await User.findByIdAndUpdate(id,
          { name: name, gmail: gmail, age: age, address: address});
          users = await users.save();
    }catch(err) {
        console.log(err);
    }

    if (!users){
        return res.status(404).json({message:"Unable to Update User Details"});
    }
    return res.status(200).json({users});
}

//Delete User Details
const deleteUser = async (req, res, next) => {
    const id = req.params.id;

    let user;

    try{
        user = await User.findByIdAndDelete(id);
    }catch (err) {
        console.log(err);
    }
    if (!user){
        return res.status(404).json({message:"Unable to Delete User Details"});
    }
    return res.status(200).json({user});
}

exports.getAllUsers = getAllUsers;
exports.addUsers = addUsers;
exports.getById = getById;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
