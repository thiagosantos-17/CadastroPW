const path = require("path");
const dotenv = require("dotenv");

dotenv.config({
    quiet: true,
    path: path.resolve(__dirname, "..", ".env")
});

const userRouter = require("./routes/users.routes");
const express = require("express");

const app= express();

// código para que o servidor aceite receber dados via json
app.use(express.json());

const PORT = process.env.PORT;

app.listen(PORT, function(){
    console.log(`Rodando em http://localhost:${PORT}`)
});

const publicPath =  path.join(__dirname, "..", "public");
const assetsPath =  path.join(publicPath, "assets");
const pagesPath =  path.join(publicPath, "pages");



app.use("/", express.static(pagesPath));
app.use("/assets", express.static(assetsPath));
app.use("/users", userRouter);