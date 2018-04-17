const routes = require("express").Router();
const middleware = require("../middleware");

routes
    .post("/palindromes", middleware.addPalindrome)
    .get("/palindromes", middleware.retrivePalindromes);

module.exports = routes;
