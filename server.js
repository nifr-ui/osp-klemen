const compression = require("compression");
const express = require("express");
const helmet = require("helmet");
const app = express();
app.use(compression());

const port = process.env.PORT || 4000;
const router = express.Router();
const bodyParser = require("body-parser");

app.use(express.static(__dirname + "/public"));
app.set("views", __dirname + "/public/views");
app.use("/", router);
app.use(helmet.dnsPrefetchControl());
app.use(helmet.expectCt());
app.use(helmet.frameguard());
app.use(helmet.hidePoweredBy());
app.use(helmet.hsts());
app.use(helmet.ieNoOpen());
app.use(helmet.noSniff());
app.use(helmet.permittedCrossDomainPolicies());
app.use(helmet.referrerPolicy());
app.use(helmet.xssFilter());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/views/index.html");
});
app.get("*", function (req, res) {
  res.sendFile(__dirname + "/public/views/index.html");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
