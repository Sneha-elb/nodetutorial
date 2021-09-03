const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const userRoutes = require("./routes/userRoutes");
const db = require("./init.js");


db.sequelize.sync({ force: false }).then(() => {
  console.log("DB Sync... done!");
});

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());


app.use("/biascorp/user", userRoutes);


var server = app.listen(8081, () => {
  const host = server.address().address;
  const { port } = server.address();

  console.log("Example app listening at http://%s:%s", host, port);
});
