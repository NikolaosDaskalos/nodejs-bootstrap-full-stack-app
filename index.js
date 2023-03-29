const express = require("express");
const app = express();
const port = 3000;

const swagger = require("swagger-ui-express");
const swaggerDocument = require("./swagger");

const bodyParser = require("body-parser");

//TODO add npm i cors before run it
const cors = require("cors");

app.use(
    cors({
        origin: "*",
        // origin:['http://www.section.io', 'http://www.google.com']
    })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const mongoose = require("mongoose");
require("dotenv").config();

app.use("/", express.static("files"));

mongoose.set("strictQuery", false);
mongoose.connect(
    process.env.MONGODB_URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Connected to MongoDB");
        }
    }
);
const user = require("./routes/user.routes");
const userProduct = require("./routes/user.product.routes");

app.use("/api/user", user);
app.use("/api/userproducts", userProduct);

app.use("/api-docs", swagger.serve, swagger.setup(swaggerDocument.options));

app.listen(port, () => {
    console.log(`server is listening in port ${port}`);
});
