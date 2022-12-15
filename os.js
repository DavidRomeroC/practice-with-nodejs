const os = require('os')

console.log(os.userInfo())//informacion del usuario
console.log(os.uptime())//tiempo desde que se encendio la maquina
console.log(os.platform())//para mostrat el sistema operativo en el que se esta ejecutando node
console.log(os.totalmem())//para ver la memoria total del equipo
console.log(os.freemem())//mostrar la memoria libre

console.table({
    os: os.platform(),
    version: os.release(),
    totalMemory: os.totalmem(),
})