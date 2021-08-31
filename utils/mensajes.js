require('colors')

const menu = () => {
    return new Promise((resolve) => {
        console.clear()
        console.log('======================='.green)
        console.log(' Seleccione una opción'.green)
        console.log('=======================\n'.green)
        
        console.log(`${'1.'.red} Crear tarea`)
        console.log(`${'2.'.red} Listar tareas`)
        console.log(`${'3.'.red} Listar tareas completadas`)
        console.log(`${'4.'.red} Listar tareas pendietes`)
        console.log(`${'5.'.red} Completar tareas`)
        console.log(`${'6.'.red} Borrar tarea`)
        console.log(`${'0.'.red} Salir \n`)
    
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })
    
        readline.question('Seleccione una opción: ', (opt) => {
            readline.close()
            resolve(opt)
        })
    })
}
const pause = () => {
    return new Promise(resolve => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })
    
        readline.question(`\nPresione ${'ENTER'.blue} para continuar`, () => {
            readline.close()
            resolve();
        })
    })
}

module.exports = {
    menu,
    pause
}