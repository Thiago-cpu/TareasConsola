const {v4: uuidv4} = require('uuid'); // <== NOW DEPRECATED!
uuidv4();
class Tarea {
    constructor(desc){
        this.id = uuidv4()
        this.desc = desc
        this.completadoEn = null
        this.creadaEn = Date.now()
    }
}

module.exports = Tarea