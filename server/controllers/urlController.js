//URL Controller
//URL Model
const urlModel = require("../models/url");

//Random URL ID generator
const nanoId = require("nanoid");
//When adding a new url to database
exports.addUrl = (req, res, next) => {
  const sourceUrl = req.body.sourceUrl;
  const urlId = nanoId.nanoid(); //UUID generation
  const url = new urlModel({ sourceUrl: sourceUrl, urlId: urlId });
  url.save();

  let newTinifiedUrl = `${req.protocol}://${req.get("host")}/${urlId}`;
  res.send(newTinifiedUrl);
};

//redirect to source url when using tinified one
exports.getUrl = (req, res) => {
  //find document where urlId is same as request.params
  let tinifiedUrlId = req.params.urlId;
  urlModel
    .findOne({ urlId: tinifiedUrlId })
    .select("sourceUrl")
    .then((data) => {
      if (data === null) {
        res.redirect("/404");
      } else {
        res.redirect(data.sourceUrl);
      }
    })
    .catch((error) => {
      res.send(error);
    });
};
