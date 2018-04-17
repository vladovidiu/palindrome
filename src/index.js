const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const config = require("./config");
const routes = require("./api/routes");
const cache = require("./cache/index.js");

cache.createStructure(config.cache);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    req.cache = cache;
    next();
});

const port = process.env.PORT || config.apiPort;

app.use("/", routes);

app.listen(port);
console.log(`Server is listening on port ${port}`);

module.exports = app;
