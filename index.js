const express = require('express')
var router = express.Router();
const app = express();
require("dotenv").config()
//const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST)
const bodyParser = require('body-parser');
var cors = require('cors')
var xss = require('xss-clean')

const config = require('./config/default');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());

app.use(xss())
app.use(cors());

app.set('view engine', 'ejs');

app.use("*", function (req, res) {
	res.status(404).send('<center><h3>Selserve 404 Not Found</h3></center>');
});

app.listen(config.port, () => {
  console.log('app listening on port '+config.port)
});

const { user } = require("./config/connection.js");