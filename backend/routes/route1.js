const express = require("express"); //import express

// 1.
const router = express.Router();
// 3.
const tryController = require("../controllers/controller1.js");
router.post("/post", tryController.newTry);

module.exports = router; // export to use in server.js
