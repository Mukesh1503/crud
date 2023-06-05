const express = require("express");
const app = express();
require("./db/mongodb");
const router = require("./routes/router");
const path = require('path')
const cors = require('cors');

app.use(cors());

app.disable("x-powered-by");
app.use(express.json());


app.use(router);

const PORT = 5000;


app.use(express.static(path.join(__dirname,"./build")))

app.listen(PORT, () => {
  console.log("server start");
});
