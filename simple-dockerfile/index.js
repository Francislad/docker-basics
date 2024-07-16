const fs = require('fs');
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const now = Date.now();
  fs.writeFile(`./logs/${now}.txt`, JSON.stringify(new Date()), (err) => {
    if (err) throw err;
  });
  console.log(now);
  res.send(`It's done.`);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})