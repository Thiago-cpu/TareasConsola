const { inquirerMenu, pause, leerInput, listadoTareasBorrar, confirmar, listadoTareasCompletar } = require('./utils/inquirer')
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
            case 5:
                const ids = await listadoTareasCompletar(Object.values(tareas._listado))
                console.log(tareas.completarTareas(ids))
            break;
            case 6:
                const id = await  listadoTareasBorrar(Object.values(tareas._listado))
                if(id){
                    const ok = await confirmar('¿Estás seguro?')
                    if(ok){
                        tareas.deleteTarea(id)
                    }
                }
            break;
        }
        await pause()
    };
}

main()