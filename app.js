const express = require("express");
const app = express();
const hbs = require("hbs");
require('dotenv').config();

const port = process.env.PORT

// hbs.registerHelper('helper_name', function (options) { return 'helper value'; });
hbs.registerPartials(__dirname + "/views/partials", (err) => {});

app.set("view engine", "hbs");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", { titulo: "Curso node", nombre: "Gabriel Munguia" });
});

app.get("/generic", (req, res) => {
  res.render("generic", { titulo: "Curso node", nombre: "Gabriel Munguia" });
});
app.get("/elements", (req, res) => {
  res.render("elements", { titulo: "Curso node", nombre: "Gabriel Munguia" });
});
app.get("/index", (req, res) => {
  res.render("home", { titulo: "Curso node", nombre: "Gabriel Munguia" });
});
app.get("/hola", (req, res) => {
  res.send("Hola munsdoss");
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/view/404.html");
});

console.log(`localhost:${port}`)
app.listen(port);
