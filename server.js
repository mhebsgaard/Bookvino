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

mongoose
  .connect("mongodb://localhost/bookvino", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    serverSelectionTimeoutMS: 5000,
    connectTimeoutMS: 10000,
  })
  .catch((error) => console.error("FAIL in connection to database"));
const db = mongoose.connection;


db.once("open", () => console.log("/// ---> DB-SERVER is ready"));


app.use("/winery", require("./routes/bookvino.routes"));



app.listen(PORT, () => {
  console.log("/// ---> API-SERVER is ready and listening to port no. " + PORT);
});
