const express = require('express');
const mongoose = require('mongoose');
var bodyparser = require('body-parser');

const router = require('./routes');
const cors = require('cors');
const app = express();


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors());


mongoose.connect('mongodb://localhost:27017/CrudDb', {
    useCreateIndex: true,
    useNewUrlParser: true
});

app.listen(1801, () => {
    console.log("PORT :-------- 1801");
    app.use(router);
});