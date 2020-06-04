const express    = require("express");
const bodyParser = require("body-parser");
const HttpError  = require("./model/http-error");  //TODO Kien unused const

const userHomeRoute = require("./route/user-home");


const PORT = 5000 || process.env.PORT;

const app = express();

app.use(bodyParser.json());

//API for bypass CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin",  "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"  );
  next();
});

//Routes
app.use("/", userHomeRoute);
//TODO Kien add /hello/:name here

//Error Handler: Receive any error respone from any routes. Then respone this error to client via json  //TODO Kien typo respond
app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "Something went wrong!" });
});

//start server
app.listen(PORT, () => {
  console.log("Server is running at PORT:", PORT);
});
