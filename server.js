const express = require("express");
let bodyParser = require("body-parser");
const serverConfig = require("./config/server.config");
const router = require("./Routes/index");
const expressApp = express();
expressApp.use(bodyParser.json());
expressApp.use(router);


 
 




expressApp.listen(serverConfig.PORT, () => {
    console.log("server listening at port" +serverConfig.PORT)
})