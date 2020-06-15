/**
 * async function其实是promise的语法糖
 * 
 * 以同步的方式写异步
 *  await能暂停async function 的执行
 *  await关键字能以同步的写法获取promise的执行结果
 *  try-catch能获取到await所得到的错误
 *  */


(function () {
    const result = (async function () {
        try {
            var content = await new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (Math.random() < 0.5) {
                        resolve('success')
                    } else {
                        reject(new Error('fail'))
                    }
                }, 500)
            })
        } catch (error) {
            console.log('await若是fail，会在catch中捕抓到reject的信息：', error.message)
        }
        console.log('等待await后得到的结果：', content)
        return
    })()

    setTimeout(() => {
        console.log('async function返回的是一个promise：',result)
    }, 800)
})()