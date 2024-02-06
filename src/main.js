const express = require("express");
const http = require("http");
const server = http.createServer();
const { Server  } = require("socket.io");
const app = express();
const io = new Server(server);

app.get("/", (req, res) => {
   res.sendFile(__dirname+"/pages/index.html"); 
});

app.listen(8080, () => {
    console.log("Running in http://localhost:8080");
});