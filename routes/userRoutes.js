const express= require("express");
const userController= require("../controller/userController");
const router= express.Router();

router.get("/:id", userController.getuser);
  
  router.get("/", userController.getallusers);
  
  router.post("/", userController.createUser);
  
  router.put("/:id", userController.updateUser);
  
  router.delete("/:id", userController.deleteUser);

  module.exports= router;