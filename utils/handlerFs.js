const fs = require('fs')

const listadoFile = './tareas/listado.json'

const getTareas = () => {
    if(fs.existsSync(listadoFile)) {
        const listado = fs.readFileSync(listadoFile)
        if(Object.keys(listado).length) return JSON.parse(listado)
        return null
    }
    return null
}

const saveTareas = (data) => {
    fs.writeFileSync(listadoFile, JSON.stringify(data))
}

module.exports = {
    getTareas,
    saveTareas
}