const express = require("express");
const app = express();
const morgan = require("morgan");
require("dotenv").config();
const path = require("path");

//Routes
const video = require("./routes/video");
const audio = require("./routes/audio");


app.use(express.json());
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended:true }));
app.use(morgan("dev"));

app.use("/video", video)
app.use("/audio", audio);


app.listen(process.env.PORT, () => {
    console.log("Servidor iniciado en el puerto: "+process.env.PORT);
});