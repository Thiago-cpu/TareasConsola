const { inquirerMenu, pause, leerInput } = require('./utils/inquirer')
const Tarea = require('./models/Tarea')
const Tareas = require('./models/Tareas')
require('colors')



const main = async() => {

    let opt = ''
    const tareas = new Tareas()

    while (opt !== 0){
        opt = await inquirerMenu()
        switch (opt) {
            case 1:
                const desc = await leerInput('Descripción: ')
                console.log(tareas.crearTarea(desc))
            break;
            case 2:
                tareas.listarTareas()
            break;
            case 3:
                tareas.listarTareas('COMPLETADO')
            break;
            case 4:
                tareas.listarTareas('PENDIENTE')
                
            break;
        }
        await pause()
    };
}

main()