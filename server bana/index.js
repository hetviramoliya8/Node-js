const http = require("http");
const port = 1008;

const portHandler = (req, res)=>{
    res.write("hello")
    res.end()
}

const server = http.createServer(portHandler)

server.listen(port, (err)=>{
    err ? console.log(err): console.log("server started on port :" , port);
    
})