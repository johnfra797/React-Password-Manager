const NodeCache = require("node-cache");
const uuid = require('uuid');
const PasswordCards = require("../models/PasswordCards.Model");
const myCache = new NodeCache({ stdTTL: 100, checkperiod: 120 });

exports.Get = (req, res) => {
  let arrResult = [];
  keys = myCache.keys();
  keys.forEach(function (key) {
    value = myCache.get(key);
    arrResult.push({
      ID:key,
      NAME: value.NAME,
      URL: value.URL,
      USERNAME: value.USERNAME,
      PASSWORD: value.PASSWORD,
    });
  });
  return res.json(arrResult);
};

exports.Delete = (req, res) => {
  value = myCache.del(req.params.id);
  return res.json("OK");
};

exports.Post = (req, res) => {
  var passworCardModel = new PasswordCards(
    req.body.NAME,
    req.body.URL,
    req.body.USERNAME,
    req.body.PASSWORD
  );
  myCache.set(uuid.v1(),passworCardModel);
  return res.json("OK");
};

exports.Put = (req, res) => {
  var passworCardModel = new PasswordCards(
    req.body.NAME,
    req.body.URL,
    req.body.USERNAME,
    req.body.PASSWORD
  );
  value = myCache.del(req.params.id);
  myCache.set(req.params.id,passworCardModel);
  return res.json("OK");
};
