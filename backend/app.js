const express = require("express");
const { handleRequest } = require("./controllers/apiController");

const app = express();

app.use(express.json());
app.use(express.static("./frontend"));

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: "../frontend" });
});

app.post("/api/submit", (req, res) => {
    const response = handleRequest(req.body);
    console.log("Response sent to client:", response);
    res.send(response);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
