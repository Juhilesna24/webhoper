const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
require("./app/routes/routes")(app);

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.get("/", (req, res) => {
    res.json({message: "Welocme to my Application"});
});
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

const db = require("./app/models");
db.sequelize.sync();