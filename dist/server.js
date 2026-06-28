"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
const PORT = 3000;
app.get('/', (req, res) => {
    res.send("hello everyone");
});
app.listen(PORT, () => {
    console.log("server is running in " + PORT);
});
//# sourceMappingURL=server.js.map