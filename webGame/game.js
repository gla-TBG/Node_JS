module.exports = function(playerAction){
    if (['rock', 'scissor', 'paper'].indexOf(playerAction) === -1) {
        throw new Error('invalid playerAction')
    }

    let computerAction
    const random = Math.random() * 3
    if (random < 1) {
        computerAction = 'rock'
    } else if (random > 2) {
        computerAction = 'scissor'
    } else {
        computerAction = 'paper'
    }

    if (computerAction === playerAction) {
        return 0 // 平局
    } else if (
        (computerAction === 'rock' && playerAction === 'scissor') || 
        (computerAction === 'scissor' && playerAction === 'paper') || 
        (computerAction === 'paper' && playerAction === 'rock')
    ) {
        return -1 // 玩家输
    } else {
        return 1 // 玩家赢
    }
}