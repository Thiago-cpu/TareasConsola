const inquirer = require('inquirer')
require('colors')

const menuOptions = [
    {
        type: 'list',
        name: 'opcion',
        message: '?¿',
        choices: [
            {
                value: 1,
                name: `${'1.'.red} Crear tarea`
            },
            {
                value: 2,
                name: `${'2.'.red} Listar tareas`
            },
            {
                value: 3,
                name:`${'3.'.red} Listar tareas completadas`
            },
            {
                value: 4,
                name:`${'4.'.red} Listar tareas pendietes`
            },
            {
                value: 5,
                name:`${'5.'.red} Completar tareas`
            },
            {
                value: 6,
                name:`${'6.'.red} Borrar tarea`
            },
            {
                value: 0,
                name:`${'0.'.red} Salir`
            },
        ]
    }
]

const inquirerMenu = async () => {
    console.clear()
    console.log('======================='.green)
    console.log(' Seleccione una opción'.green)
    console.log('=======================\n'.green)

    const {opcion} = await inquirer.prompt(menuOptions)
    return opcion
}

const pause = async() => {
    console.log('\n')
    await inquirer.prompt([{
        type: 'input',
        name: 'enter',
        message: `Presione ${'ENTER'.blue} para continuar`
    }])
}

const leerInput = async(message) => {
    const {desc} = await inquirer.prompt([{
        type: 'input',
        name: 'desc',
        message,
        validate(value){
            if(value.length === 0){
                return 'Ingrese un valor'
            }
            return true;
        }
    }])
    return desc
}

const listadoTareasBorrar = async(tareas = []) => {
    const choices = tareas.map((tarea, i) => {
        const {desc, id} = tarea
        const indice = `${i+1}.`.red

        return {
            value: id,
            name: `${indice} ${desc}`
        }
    })

    choices.unshift({
        value: 0,
        name: `${'0.'.red} Cancelar`
    })

    const listadoTareas = [
        {
            type: 'list',
            name: 'id',
            message: '¿Cuál tarea desea borrar?',
            choices
        }
    ]
    const {id} = await inquirer.prompt(listadoTareas)
    return id
}

const confirmar = async(message) => {
    const queryConfirmar = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ]
    const {ok} = await inquirer.prompt(queryConfirmar)
    return ok
}

const listadoTareasCompletar = async(tareas = []) => {
    const choices = tareas.map((tarea, i) => {

        const {desc, id, completadoEn} = tarea
        const indice = `${i+1}.`.red

        return {
            value: id,
            name: `${indice} ${desc}`,
            checked: Boolean(completadoEn)
        }
    })

    const listadoTareas = [
        {
            type: 'checkbox',
            name: 'ids',
            message: '¿Qué tareas desea marcar como completadas?',
            choices
        }
    ]
    const {ids} = await inquirer.prompt(listadoTareas)
    return ids

}

module.exports = {
    inquirerMenu,
    pause,
    leerInput,
    listadoTareasBorrar,
    listadoTareasCompletar,
    confirmar
}