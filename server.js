const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const multer = require("multer");
const app = express();
const dotenv = require("dotenv"); 
const path = require("path")
dotenv.config();
app.use(cors()); 
app.use(express.static(path.join(__dirname, "./client/build"))); 

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads")
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, `${Date.now()}_${file.originalname}`)
    }
  })
  
  const upload = multer({ storage: storage })

  let connectToMDB = async () => {
    try{
        await mongoose.connect(process.env.connectionString);
        console.log("connected to MongoDb Successfully ");

    } catch (error){
          console.log(error)
    }
  }

  let userSchema = new mongoose.Schema({
    userName: String,
    email: String,
    password: String
  })

  let officeUser = new mongoose.model("officeUsers", userSchema);

  app.listen(8888,()=>{
    console.log(`listening to the port ${process.env.port}`);

  })

  app.post("/SignUp",upload.none(), async(req, res) => {
     let userData = await officeUser.find().and({ email: req.body.email});
     console.log(userData);
     if(req.body.userName == "" || req.body.email == "" || req.body.password == "" ){
        res.json({ msg: "please enter your details", status:"details are incorrect"});

     }else{
        if(userData.length > 0){
            res.json({ msg: "user already exists", status:"insert into DB failed"});

        }else {
            try{
                let newUser = new officeUser(
                    {
                        userName : req.body.userName,
                        email : req.body.email,
                        password: req.body.password
                    }
                )
                await officeUser.insertMany([newUser]);
                res.json({ msg: "user created successfully", status: "success"});
            } catch (error){
               console.log(error);
               res.json({ msg: "unable to create user", status:"fail"});
            }
        }
     }
  })

  app.post("/login", upload.none(), async(req , res) => {
    let userDetails = await officeUser.find().and({ email: req.body.email});
    if (userDetails.length > 0){
        if(userDetails[0].password == req.body.password){
            res.json({ status: "success", userData: userDetails});
        }
        else {
            res.json({ status:"failure", msg: "INVALID PASSWORD"});

        }
        
    } else{
        res.json({ status:"failure", msg: "INVALID EMAIL"});
    }
  })
  connectToMDB();