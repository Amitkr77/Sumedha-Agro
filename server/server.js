console.log("Server file started");

require("dotenv").config();
const express = require("express");
const cors = require("cors");

const contactRoute = require("./routes/contact");

const app = express();

app.use(cors({
  origin: true,
  credentials: true
}));

app.use(express.json());

app.use("/api", contactRoute);

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});
