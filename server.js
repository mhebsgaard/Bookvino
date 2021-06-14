require('dotenv').config() // Implementerer vores .env-fil
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5001;


// const formData = require("express-form-data");
// app.use(formData.parse());

app.use(cors({ credentials: true, origin: true })); 
app.use(express.static('public'))
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));


app.get("/", async (req, res) => {
  console.log("The server is started! - Here is the homepage!!");

  
  res.status(200).json({ besked: "Welcome the the servers homepage" });
});

const mongoose = require("mongoose");

// Vi henter data fra mongodb cluster (shared data) via vores .env, som vi har navngivet DATABASE_URL
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    serverSelectionTimeoutMS: 5000,
    connectTimeoutMS: 10000,
  })
  .catch((error) => console.error(error));
const db = mongoose.connection;


db.once("open", () => console.log("/// ---> DB-SERVER is ready"));


app.use("/winery", require("./routes/bookvino.routes"));



app.listen(PORT, () => {
  console.log("/// ---> API-SERVER is ready and listening to port no. " + PORT);
});
