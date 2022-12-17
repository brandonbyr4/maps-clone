const express = require("express");
const app = express()

app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: false }))
app.use(express.static(__dirname + '/static'));

app.get("/", (req, res) => {
    res.render('index')
})

app.listen(process.env.PORT || 8000)