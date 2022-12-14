const mongoose = require("mongoose");

const UserDetailsScehma = new mongoose.Schema(
  {
    name: {
      type:String,
      maxlength:50
  },
  email: {
      type:String,
      trim:true,
      unique: 1 
  },
  password: {
      type: String,
      minglength: 5
  },
  lastname: {
      type:String,
      maxlength: 50
  },
  role : {
      type:Number,
      default: 0 
  },
  image: String,
  token : {
      type: String,
  }
    
  
  
  
  });

mongoose.model("users", UserDetailsScehma);

