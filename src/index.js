const express=require("express");

const userController=require("./controller/user.controller");

const {register,login}=require("./controller/auth.controller");

const productController=require("./controller/product.controller")

const app=express()

app.use(express.json());

app.use("/user",userController);

app.post("/register",register);

app.post("/login",login) 
app.use("/product",productController)


module.exports=app