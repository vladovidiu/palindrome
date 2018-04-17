const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const config = require("./config");
const routes = require("./api/routes");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const port = process.env.PORT || config.apiPort;

app.use("/", routes);

app.listen(port);
console.log(`Server is listening on port ${port}`);
