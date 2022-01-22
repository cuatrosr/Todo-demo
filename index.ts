import express from "express";
const app = express();
app.get("/", (req, res) => {
  res.send("Well done boy!");
});
app.listen(80, () => {
  console.log("The application is listening on port 3000!");
});
