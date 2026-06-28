import express from "express";
import { serverConfig } from "./config/index.js";
import { pingHandler } from "./controllers/ping.controller.js";
import pingRouter from "./router/ping.router.js";

const app = express();
 
app.use(pingRouter);

app.listen(serverConfig.PORT, () => {
    console.log(`Server is running on port ${serverConfig.PORT}`);
});
