import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const port = Number(process.env.PORT) || 3000;
app.get("/", (req, res) => {
    res.send("Hello everyone");
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
//# sourceMappingURL=server.js.map