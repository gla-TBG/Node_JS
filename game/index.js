const playerAction = process.argv[process.argv.length-1]

const ramdon = Math.random() * 3

let computerAction
if (ramdon < 1) {
    computerAction = 'rock'
} else if (ramdon > 2) {
    computerAction = 'scisser'
} else {
    computerAction = 'paper'
}

if (computerAction === playerAction) {
    console.log('平局')
    return
}

if (
    (computerAction === 'rock' && playerAction === 'paper') ||
    (computerAction === 'scisser' && playerAction === 'rock') ||
    (computerAction === 'paper' && playerAction === 'scisser')
) {
    console.log('你赢了')
} else {
    console.log('你输了')
}