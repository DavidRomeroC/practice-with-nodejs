const path = require('path')

const filePath = path.join("/public", "dist", "/styles", "main.css")//convierte los paths en una ruta valida para el os en el que se encuentra

console.log(filePath)
console.log(path.basename(filePath))
console.log(path.dirname(filePath))
console.log(path.parse(filePath))
console.log(path.resolve("dist"))