import express from "express";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config(); 

const app = express();

const url = process.env.URL;
const interval = 30000;

function reloadWebsite() {
  if (!url) {
    console.error("❌ No URL defined in .env");
    return;
  }

  axios
    .get(url)
    .then(() => {
      console.log("✅ Website reloaded");
    })
    .catch((error) => {
      console.error(`❌ Error: ${error.message}`);
    });
}

setInterval(reloadWebsite, interval);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`🚀 Server started on port: ${port}`);
});
