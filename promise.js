const { readFile } = require('fs/promises')
const {promisify} = require('util')

const read = async () => {
    try {
        const result = await readFile('./data/first.txt', 'utf-8')
        const resultDos = await readFile('./data/second.txt', 'utf-8')
        console.log(result)
        console.log(resultDos)
    } catch (error) {
        console.log(error)
    }
}

/////////////////////////////////////////////////

// const readFilePromise = promisify(readFile)

// const read = async () => {
//     try {
//         const result = await readFilePromise('./data/first.txt', 'utf-8')
//         const resultDos = await readFilePromise('./data/second.txt', 'utf-8')
//         console.log(result)
//         console.log(resultDos)
//     } catch (error) {
//         console.log(error)
//     }
// }

/////////////////////////////////////////////////////

// const getText = (pathFile) => {
//     return new Promise((resolve, reject) => {
//         readFile(pathFile, 'utf-8', (err, data) => {
//             if (err) {
//                 reject(err)
//             }
//             resolve(data)
//         })
//     })
// }

// getText('./data/first.txt')
//     .then((result)=>console.log(result))
//     .then(()=>getText('./data/second.txt'))
//     .then((result)=>console.log(result))
//     .catch((err)=>console.log(err))

// const read = async () => {
//     try {
//         // throw new Error('error a proposito')
//         const result = await getText('./data/first.txt')
//         const resultDos = await getText('./data/second.txt')
//         console.log(result)
//         console.log(resultDos)
//     } catch (error) {
//         console.log(error)
//     }
// }

read()