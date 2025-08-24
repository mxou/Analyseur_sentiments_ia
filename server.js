const express = require("express");
const Sentiment = require("sentiment");
const cors = require("cors");

const app = express();
const sentiment = new Sentiment();

app.use(cors());
app.use(express.json());

app.post("/analyze", (req, res) => {
  const { text } = req.body;
  const result = sentiment.analyze(text);
  res.json(result);
});

app.listen(3000, () => console.log("🚀 Serveur lancé sur http://localhost:3000"));
