const http = require("http")
const server = http.createServer(function(req,res){
    if(req.url === "/getsecratedata"){
        res.write("there is no secrate data");
    }
    res.end("Hello world");
});
server.listen(7755);