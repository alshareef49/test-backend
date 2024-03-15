const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require('cors');

const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname,  '.env') });

app.use(cors());

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:true}));

app.use('/uploads', express.static(__dirname + '/uploads'));



// require("dotenv").config({path:"../backend/config/config.env"});

const userRouter = require("./routers/userRouter"); 
const carRouter = require("./routers/carRouter");
const dealerRouter = require("./routers/dealerRouter");

app.use("/user",userRouter);
app.use("/car",carRouter);
app.use("/deal",dealerRouter);


module.exports = app;



