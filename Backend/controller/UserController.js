import UserModel from "../Models/user.js";

const CreateUser = async(req, res)=>{
  try{
    const {name, fathername, email, Phone} = req.body;
     const NewUser = new UserModel({
        name, fathername, email, Phone
     });
     await NewUser.save();
     res.status(200).json({success: true, Message:'User created successfully', NewUser})

  }catch (error){
    console.log(error)
    res.status(500).json({success: false, Message:'Internal server error', NewUser})
  }
    
}

const GetUser = async(req, res)=>{
    try{
        const user = await UserModel.find();
        if(!user){
           return res.status(404).json({success:false, Message:'uer not found'})
        } 
        res.status(200).json({success:true, user})

    }catch(error){
        console.log(error)
        return res.status(500).json({success:false,Message:'Internal server error'})
    }
}

const UpdateUser = async(req, res)=>{
    try{
        const user = req.params.id;
        const updateuser = await UserModel.findByIdAndUpdate(user,req.body, {new:true});
        if(!user){
           return res.status(404).json({success:false, Message:'User not found'})
        }
        res.status(200).json({success:true, Message:'User updated successfully', updateuser})
    }catch(error){
        console.log(error);
        return res.status(500).json({success:false,Message:'Internat server error'})

    }
}

const DeleteUser = async(req, res)=>{
    try{
        const id = req.params.id;
        const DltUser = await UserModel.findByIdAndDelete(id);
        if(!DltUser){
            return res.status(404).json({success:false, Messaage:'User not found'})
        }
        res.status(200).json({success: true, Message:'User deleted successfully'})
    }catch(error){
        console.log(error);
        return res.status(500).json({success: false, Message:'Internal server error'})

    }
}
export {CreateUser,GetUser, UpdateUser,DeleteUser };