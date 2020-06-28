const game = require('./game.js')
const http = require('http')
const url = require('url')
const querystring = require('querystring')
const fs = require('fs')

let playerWon = 0
let sameAction = 0
let playerLastAction = null

http.createServer((req, res) => {
    const parseUrl = url.parse(req.url);
    if (parseUrl.pathname === '/favicon.ico') {
        res.writeHead(200)
        res.end()
        return
    }

    if (parseUrl.pathname == '/game') {
        const query = querystring.parse(parseUrl.query)
        const playerAction = query.action

        if (playerAction && playerAction === playerLastAction) {
            sameAction ++
        } else {
            sameAction = 0
        }

        if (playerWon >= 3 || sameAction >= 3) {
            res.writeHead(500)
            res.end('你太厉害了，不和你玩了')
            return
        }

        const gameReslut = game(playerAction)

        playerLastAction = playerAction

        res.writeHead(200)
        if (gameReslut === 0) {
            res.end('平局')
        } else if (gameReslut === 1) {
            playerWon ++
            res.end('你赢了')
        } else {
            res.end('你输了')
        }
    }

    // 如果访问的是根路径，则把游戏页面读出来返回出去
    if (parseUrl.pathname == '/') {
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    }
}).listen(4000)