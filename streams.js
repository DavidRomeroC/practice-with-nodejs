// const { writeFile } = require('fs/promises')


// const createFile = async (text) => {
//     await writeFile('./data/hardFile.txt', text.repeat(1000000))
// }

// createFile('hola mundo')

const {createReadStream} = require('fs')

const stream = createReadStream('./data/hardFile.txt', {
    encoding: 'utf-8',
})

stream.on('data', (chunk)=>{
    console.log(chunk)
})

stream.on('end', ()=>{
    console.log('ya termino de leer el archivo')
})

stream.on('error', (err)=> {
    console.log(err)
})