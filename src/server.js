const express = require("express");
const path = require("path");
const pages = require("./pages.js");
const server = express();

server.use(express.urlencoded({extended: true}))
  .use(express.static("public"))
  .set("views", path.join(__dirname, "views"))    //configura o template engine
  .set("view engine", "hbs")                      //configura a engine
  .get("/", pages.index)
  .get("/orphanage", pages.orphanage)
  .get("/orphanages", pages.orphanages)
  .get("/create-orphanage", pages.createOrphanage)
  .post("/save-orphanage", pages.saveOrphanage);

server.listen(5500);