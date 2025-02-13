const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/dbConnect");
const bookingRoutes = require("./routes/bookingRoutes");
const app = express();

const PORT = process.env.PORT || 4000;

dbConnect();

app.use(cors());
app.use(express.json());

app.use("/api", bookingRoutes);

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
