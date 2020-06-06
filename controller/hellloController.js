const hello = (req, res, next) => {
  const name = req.params.name;
  res.json({ message: "Hello ", name });
};

module.exports = {
  hello,
};
