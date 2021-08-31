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
        for (const tarea of Object.values(this._listado)){
            const {desc, completadoEn} = tarea
            const tareaState = completadoEn?'COMPLETADO'.green:'PENDIENTE'.red
            if(tareaState.match(whichState) || whichState===undefined)console.log(`${desc}: ${tareaState}`)
        }
    }
}

module.exports = Tareas;