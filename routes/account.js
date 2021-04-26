var router = require("express").Router();

var createRegistData = function (body) {
  var datetime = new Date();
  return {
    url: body.url,
    published: datetime,
    update: datetime,
    title: body.title,
    content: body.content,
    keywords: (body.keywords || "").split(","),
    authors: (body.keywords || "").split(","),
  };
};

router.get("/", (req, res) => {
  res.render("./account/index.ejs");
});

router.get("/posts/regist", (req, res) => {
  res.render("./account/posts/regist-form.ejs");
});

router.post("/posts/regist/input", (req, res) => {
  var original = createRegistData(req.body);
  res.render("./account/posts/regist-form.ejs", { original });
});

module.exports = router;