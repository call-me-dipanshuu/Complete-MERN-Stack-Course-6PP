const express = require("express");
const path = require("path");
const app = express();
const port = 4000;
const bodyParser = require("body-parser");
const router = require("./UserRoutes");
app.use(bodyParser.urlencoded({ extended: false }));

app.use(router);
// app.post("/", (req, res) => {
//   res.send("<h1>Hey</h1>");
//   console.log(req.body);
//   res.sendFile(path.join(__dirname + "/index.html"));
//   res.send(`Welcome ${req.body.name}`);
// });
// app.get("/contact", (req, res) => {
//   res.send("<h1>Contact Us</h1>");
// });
// app.post("/", () => {
//   const userName = req.body.name;
// });
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});
app.use(express.json());
app.get("/api/v1/userdata", (req, res) => {
  res.json({
    name: "Abhi",
    email: "abhi@gmail.com",
    password: "hexed",
  });
});

// app.post("/api/v1/register", (req, res) => {
//   const username = req.body.name;
//   const email = req.body.email;
//   const password = req.body.password;
//   res.json({
//     success: true,
//     username: username,
//     email,
//     password,
//   });
// });
app.listen(port, () => {
  console.log(`Server is Working on port:${port}`);
});
