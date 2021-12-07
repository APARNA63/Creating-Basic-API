const fs = require('fs')
const http = require('http')
const url = require('url')
const server = http.createServer((req,res)=>{
    console.log(req)
    console.log(req.url)
    const path =req.url
    if(path === '/Profile' || path ==='/' ){
        res.end('Hello,this is Appu')
    }else if(path ==='/api'){
        fs.readFile('./data.json','utf-8',(err,data)=>{
            const Appu=JSON.parse(data)
            console.log(Appu)
            res.writeHead(200,{'content-type':'application/json'})
            res.end(data)
                })
    }
})
const data =fs.readFileSync('./data.json','utf-8')
const dataobj =JSON.parse(data)
server.listen(7000,'127.0.0.1',()=>{
    console.log("Port at 7000")
})