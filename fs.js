const fs = require('fs');

// const first = fs.readFileSync('./data/first.txt', 'utf-8')//el primer argumento es para leer el archivo o fichero y el segundo argumento para convertirlo a un texto que se pueda leer por el usuario
// const second = fs.readFileSync('./data/second.txt').toString()//tambien se puede transformar agregando el metodo toString()

// console.log(first)
// console.log(second)

// fs.writeFileSync('./data/third.txt', 'este es un tercer archivo')//primer argumento para dar la direccion donde se creara el archivo y el segundo argumento para el contenido del documento

// const title = "contenido de archivo nuevo"

// fs.writeFileSync('./data/fourth.txt', title, {
//     flag: 'a',//este tercer argumento es para no sobreescribir el archivo con "a" de append
// })

fs.readFile('./data/first.txt', 'utf-8' ,(error, data) => {
    console.log(error)
    console.log(data)

    fs.writeFile('./data/fileAsync.txt', 'se genero texto asyncrono' , (error)=>{
        console.log(error)
    })
})