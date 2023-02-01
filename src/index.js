const express = require("express");
const path = require("path");
const identificador = require("morgan");
const ejs = require("ejs");
const indexrouter = require("./router/index");

const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");



app.use(indexrouter);

app.listen(3000, () => {
    console.log("Iniciasion en el puerto 3000");
})