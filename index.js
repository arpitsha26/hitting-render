import express from "express"
import dotenv from "dotenv"
import axios from "axios";


const app=express()

const url = process.env.URL;
const interval = 30000;

function reloadWebsite() {
  axios
    .get(url)
    .then((response) => {
      console.log("website reloded");
    })
    .catch((error) => {
      console.error(`Error : ${error.message}`);
    });
}

setInterval(reloadWebsite, interval);





dotenv.config()

const port=process.env.PORT || 5000


app.listen(port, () => {
    console.log(`🚀 Server started on port: ${port}`);
  });