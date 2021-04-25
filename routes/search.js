var { CONNECTION_URL, OPTIONS, DATABASE } = require("../config/mongodb.config.js");
var router = require("express").Router();
var MongoClient = require("mongodb").MongoClient;

router.get("/*", (req, res) => {
  var keyword = req.query.keyword || "";

  var reqexp = new RegExp(`.*${keyword}.*`);

  MongoClient.connect(CONNECTION_URL, OPTIONS, (error, client) => {
    var db = client.db(DATABASE);
    db.collection("posts").find({
      $or: [{ titile: reqexp }, { content: reqexp }]
    }).sort({ published: -1 }).toArray().then((list) => {
      var data = {
        keyword,
        list
      };
      res.render("./search/list.ejs", data);
    }).catch((error) => {
      throw error;
    }).then(() => {
      client.close();
    });
  });
});

module.exports = router;