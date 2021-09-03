
const userService=require("../service/userService")

module.exports={
    getallusers: async (req,res)=>{
        const users = await userService.getAllUsers();
        res.send(users);
          
    },
    getuser: async (req,res)=>{
            const users = await userService.getUser(req.params.id);
            res.send(users);
       
    },
    createUser: async (req,res)=>{
        const addedUser = await userService.createUser(req.body);
        res.send(addedUser);
    },
    updateUser:  async (req,res)=>{
        const user=await userService.updateUser(req.params.id, req.body);
          res.send(user)
    },
    deleteUser: async (req,res)=>{
        const  status= await userService.deleteUser(req.params.id);
        console.log(status);
        if(status==1)
        {
            res.send("OK deleted")
        }
    }
};