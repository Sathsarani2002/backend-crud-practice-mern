// pass = 11GRxiyHOMOL31cZ

const express = require ("express");
const mongoose = require ("mongoose");
const router = require("./Routes/UserRoutes");

const app = express();

//Middleware
app.use(express.json());
app.use("/users",router);

mongoose.connect("")
.then(()=> console.log("Connected to MongoDB"))
.then(() =>{
    app.listen(5000);
})
.catch((err)=> console.log((err)));
