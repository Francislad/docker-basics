const fs = require('fs');
const express = require('express');
const {getTime} = require("./db");
const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  const now = JSON.stringify(await getTime());
  fs.writeFile(`./logs/${Date.now()}.txt`, now, (err) => {
    if (err) throw err;
  });
  console.log(now);
  res.send(`It's done.`);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})