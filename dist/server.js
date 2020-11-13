"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
app.listen(4201, () => {
    return console.log('My Node App listening on port 4201');
});
