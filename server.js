const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5001;


const formData = require("express-form-data");
app.use(formData.parse());



app.use(cors({ credentials: true, origin: true })); 
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));


app.get("/", async (req, res) => {
  console.log("Serveren er startet op! - her er startsiden!!");

  
  res.status(200).json({ besked: "velkommen til serverens startside" });
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
  .catch((error) => console.error("FEJL i connection til database"));
const db = mongoose.connection;


db.once("open", () => console.log("/// ---> DB-SERVER er klar"));


app.use("/winery", require("./routes/bookvino.routes"));



app.listen(PORT, () => {
  console.log("/// ---> API-SERVER er klar og lytter til port nummer " + PORT);
});
