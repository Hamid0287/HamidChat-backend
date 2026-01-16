const express=require("express");
const http=require("http");
const {Server}=require("socket.io");

const app=express();
const server=http.createServer(app);
const io=new Server(server,{cors:{origin:"*"}});

io.on("connection",socket=>{
  socket.on("join",user=>{
    socket.user=user;
  });

  socket.on("msg",data=>{
    io.emit("msg",data);
  });

  socket.on("status",data=>{
    io.emit("status",data);
  });
});

server.listen(3000,()=>console.log("BhaiChat server running"));
