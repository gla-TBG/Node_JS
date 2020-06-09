const glob = require('glob')

console.time('sync')
const result = glob.sync(__dirname + '/**/*')
console.log('syncResult:', result.length)
console.log('阻塞I/O')
console.timeEnd('sync')

console.log('----------------')

console.time("glob")
glob(__dirname + '/**/*', (err, res) => {
    console.log('resultLength:', res.length)
})
console.log('非阻塞I/O')
console.timeEnd("glob")
