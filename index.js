const express = require("express");
const app = express();
const port = 3000;

app.get("/info", (req, res) => {
  res.json({
    nombre: "Cesar Fernando Sazo",
    cancionFavorita: "Moviendo Caderas - Daddy Yanke"
  });
});

app.listen(port, () => {
  console.log(`API escuchando en http://localhost:${port}`);
});
