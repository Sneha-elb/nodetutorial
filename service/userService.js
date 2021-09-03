const db= require("../init");
const User= db.user;
module.exports={
    getAllUsers: async()=> await User.findAll()
    ,
    getUser: async(userId)=>await User.findOne({where: {userId:userId}})
    ,
    createUser: async (userObj)=>await User.create(userObj)
    ,
    updateUser: async (userId, userObj) => await User.update(userObj, {
        returning: false,
        where: {userId: userId}
      })
      ,
    deleteUser: async(userId)=> await User.destroy({ where: {userId: userId}})
}