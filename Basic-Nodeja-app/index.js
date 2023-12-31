const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.json({
    hey: "nodejs",
    name: "swapnil",
    age: 18,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
