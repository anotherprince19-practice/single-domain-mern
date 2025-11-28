
import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://mongo:27017/mernapp")
  .then(()=>console.log("Mongo connected"))
  .catch(err=>console.log(err));

app.get("/api", (req,res)=>{
  res.json({msg:"Backend running", time:new Date().toISOString()});
});

app.listen(5000, ()=>console.log("Backend on 5000"));
