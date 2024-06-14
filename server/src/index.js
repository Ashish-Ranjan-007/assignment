import express from "express";
import cors from "cors";
import mongoose from "mongoose";
// import {jsondata} from "./constant/jsondata.js";
import { getformrouter } from "./routes/form.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/fetch", getformrouter );


// app.get( "/getformdata", async(req, res)=>{
// try {
//     console.log(jsondata)
//     res.status(200).json(jsondata);
// }
// catch(error){
// res.status(500).json(error);

// }

// });


app.listen(3003, ()=>{console.log("server started at 3003")})