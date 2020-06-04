const getDataHomePage = (req, res, next) => {
  res.json({
    message: "This API works!",
    version: "v20200505.0200",  //TODO Kien display this version to webapp HomePage
  });
};

module.exports = {
  getDataHomePage,
};
