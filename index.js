// Import packages
const express = require("express");
const fluxus = require("./routes/fluxus");
const cryptic = require("./routes/cryptic");

// Middlewares
const app = express();
app.use(express.json());

// Routes
app.use("/fluxus", fluxus);
app.use("/cryptic", cryptic);

// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));
