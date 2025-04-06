import User from "../model/user.model.js";
import bcryptjs from 'bcryptjs'


export const signup=async(req,res)=>{
  try {
    const {fullname, email, password}=req.body
    const user=await User.findOne({email})
    if(user){
      return res.status(400).json({message:"User alrady exists"})
    }
    const hashPassword=await bcryptjs.hash(password, 10)
    const createdUser=new User({
      fullname:fullname,
      email:email,
      password:hashPassword
    })
    await createdUser.save()
    res.status(201).json("User created succesfully",
      user,  {
        _id:createduser._id,
        fullname:createduser.fullname,
        email:createduser.email
      },
    )
  } catch (error) {
    console.log("Error" +error.message)
    res.status(500).json({Message:"Interval server error"})
  }
}

export const  login =async(req,res)=>{
  try {
    const {email, password}=req.body
    const user=await User.findOne({email})
    const isMatch=await bcryptjs.compare(password, user.password)
    if(!user|| !isMatch){
      res.status(400).json({message:"Invalid user and password"})
    }else{
      res.status(200).json({message:"Login Succesfull", user:{
        _id:user._id,
        fullname:user.fullname,
        email:user.email
      }})
    }
  } catch (error) {
    console.log("Error :"+error.message)
    res.status(500).json({message:"Internal server error"})
  }
}