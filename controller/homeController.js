const getDataHomePage = (req, res, next) => {
  res.json({
    message: "This API works!",
    version: "v20200505.0200",
  });
};

module.exports = {
  getDataHomePage,
};
