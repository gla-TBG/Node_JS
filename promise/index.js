
function interview(count){
    return new Promise((reslove, reject) => {
        if (Math.random() > 0.2) {
            reslove('success')
        } else {
            reject('fail at round '+ count)
        }
    })
}

interview(1).then(()=> {
    return interview(2)
}).then((res)=>{
    console.log(res)
    return interview(3)
}).catch(err=>{
    console.log(err)
})