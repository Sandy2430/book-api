const cors = require("cors");
const express = require("express");
const fetch = require("node-fetch");
const books = require("./book-reponse");
const app = express();
app.use(cors());
app.get("/books/v1/volumes", (req, res) => {
  const queryParam = req.query.q;
  const url = `https://www.googleapis.com/books/v1/volumes?q=${queryParam}`;
  console.log(url);
  fetch(url)
    .then(res => res.json())
    .then(data => {
        res.send({ data });
    })
    .catch(err => {
        res.send(err);
    });
});
// setting up port for environment
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
