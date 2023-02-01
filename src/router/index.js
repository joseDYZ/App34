const express = require("express");
const router = express.Router();

router.get("/", (req, res) =>{
    res.render("home",{
        title: "The home"
    })
})


router.get("/login", (req, res) =>{
    res.render("login",{
        title: "Login"
    })
})

router.get("/lobby", (req, res) =>{
    res.render("lobby",{
        title: "Lobby"
    })
})
module.exports = router