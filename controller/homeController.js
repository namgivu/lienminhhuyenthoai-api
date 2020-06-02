const getDataHomePage = (req, res, next) => {
  res.json({ message: "This API works!" });
};

module.exports = {
  getDataHomePage,
};
