import express from "express";
import { createContext } from "react";
import {jsondata} from "../constant/jsondata.js";
const router = express.Router();

router.get( "/getformdata", async(req, res)=>{

try {
    console.log(jsondata)
    console.log("==========================")
    const result = jsondata;
    res.status(200).json(jsondata);

    // res.send("confirmed")
}
catch(error){
res.status(500).json(error);

}

});

export {router as getformrouter}