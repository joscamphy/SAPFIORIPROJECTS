const express = require('express');
const app = express();

app.use("/", express.static("webapp"));

console.log("Server http://localhost:4000");
const port = process.env.PORT || 4000;

app.listen(port);
