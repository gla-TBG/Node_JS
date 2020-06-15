const http = require('http')
const url = require('url')
const fs = require('fs')

http.createServer((request, response) => {
    if (url.parse(request.url).path === '/favicon.ico') {
        response.writeHead(200)
        response.end()
        return
    }
    response.writeHead(200)
    fs.createReadStream(__dirname + '/index.html').pipe(response)
}).listen(2000)