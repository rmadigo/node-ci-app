const express = require("express");
const app = express();
const port = 3000;
// Teste de PR 
app.get("/", (req, res) => {
  res.send("Olá tudo bem?");
});

module.exports = app;

if (require.main === module) {
  app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
  });
}
