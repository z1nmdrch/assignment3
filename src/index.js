const express = require('express');
const pasth = require('path');
const bcrypt = require('bcrypt');

const app = express();

app.set('view engine', 'ejs');

app.set ("/", (req, res)=>{
    res.render("login")
});
app.set ("/signup", (req, res)=>{
    res.render("signup")
});

const port = 3000;
app.listen(port, ()=>{
    console.log(`Server running on Port: ${port}`);
})
