const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const port = process.env.PORT || 8080;

const about = require("./json/about.json");
const portfolio = require("./json/portfolio.json");
const contact = require("./json/contact.json");

app.get("/", (req, res) => {
    res.send("SERVER OK");
})

app.get("/about", (req, res) => {
    res.json(about);
})

app.get("/portfolio", (req, res) => {
    res.json(portfolio);
})

app.get("/contact", (req, res) => {
    res.json(contact);
})

app.listen(port, () =>{
    console.log(`Server on: ${port}`)
});