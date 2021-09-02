const { getTareas, saveTareas} = require("../utils/handlerFs");
const Tarea = require("./Tarea");



class Tareas {
    constructor(){
        this._listado = getTareas() || {}
    }

    crearTarea = (desc) => {
        for (const tarea of Object.values(this._listado)){
            if(tarea.desc === desc) return 'La tarea ya existe ❌'.red
        }
        const tarea = new Tarea(desc)
        this._listado[tarea.id] = tarea
        saveTareas(this._listado)
        return 'Tarea registrada correctamente ✔'.green
    }

    listarTareas = (whichState) => {
        let counter = 1
        for (const tarea of Object.values(this._listado)){
            const {desc, completadoEn, creadaEn} = tarea
            if(whichState){
                const indice = `${counter}.`.red
                if(whichState === 'COMPLETADO' && completadoEn){
                    console.log(`${indice} ${desc}: ${new Date(completadoEn).toDateString().green}`)
                    counter++
                }else if(whichState === 'PENDIENTE' && !completadoEn){
                    console.log(`${indice} ${desc}: ${new Date(creadaEn).toDateString().red}`)
                    counter++
                }
            } else {
                const tareaState = completadoEn
                    ?'COMPLETADO'.green
                    :'PENDIENTE'.red
                const indice = `${counter}.`.red
                console.log(`${indice} ${desc}: ${tareaState}`)
                counter++
            }
        }
    }

    deleteTarea = (id) => {
        if(this._listado[id]) {
            delete this._listado[id]
            saveTareas(this._listado)
        }
    }

    completarTareas = (ids) => {
        const listadoArr = Object.entries(this._listado)
        for(const tarea of listadoArr){
            const [id, value] = tarea
            if(ids.includes(id)){
                if(!this._listado[id].completadoEn){
                    this._listado[id].completadoEn = Date.now()
                }
            }else {
                this._listado[id].completadoEn = null
            }
        }
        saveTareas(this._listado)
        return 'tareas completadas correctamente'
    }
    
}

module.exports = Tareas;