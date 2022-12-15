const http = require('http')

const server = http.createServer((req, res) => {

    console.log(req.url)

    if (req.url === '/') {
        res.write('welcome to the server')
        return res.end()
    }

    if (req.url === '/about') {
        res.write('acerca de')
        return res.end()
    }

    res.write(`
    <h1>No se encontro esta página</h1>
    <a href="/">Ir al home</a>
    `)
    res.end()
})

server.listen(3000)

console.log('servidor ejecutado en el puerto 3000')