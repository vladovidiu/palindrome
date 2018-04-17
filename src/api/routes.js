const routes = require("express").Router();

routes.get("/palindromes", (req, res, next) => {
    res.status(200);
    res.json({
        message: "Hello Trinity",
    });
});

module.exports = routes;
