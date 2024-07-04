import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name:{
        type:String
    },
    fathername:{
        type: String
    },
    email:{
        type: String,
        // unique : true
    },
    Phone:{
        type: Number,
        // unique: true
    }
},  {timestamps:true})

const UserModel = mongoose.model('crud', userSchema);
export default UserModel;