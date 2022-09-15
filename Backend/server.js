const express = require('express'); 
const app = express(),   
cors = require('cors'),
bodyParser = require("body-parser"),
config = require('./config');

const port = 5000; 
routesHorses = require('./api/routes/index'),
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({
    origin: '*'
}));
var router = express.Router();

router.get('/', function (req, res) {
  res.send("API PASSWORD MANAGER");
});


app.use(routesHorses);

app.use(router);

app.listen(config.PORT, function () {
  console.log(`${config.API} version ${config.version} server running on http://localhost:${config.PORT}`);
});
