const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.static(__dirname + "/build"));
app.use(express.static(__dirname + "/static"));

app.use("/*", (req, res) => {
  res.sendFile(__dirname + "/build/index.html");
});

app.listen(PORT, function () {
  console.log(`App listening on port ${PORT}!`);
});
