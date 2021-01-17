var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("covid", { title: "Covid-19 Stats" });
});

module.exports = router;

