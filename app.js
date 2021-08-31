require('colors')
const {menu, pause} = require('./utils/mensajes')
const main = async() => {

    let opt = ''

    while (opt !== '0'){
        opt = await menu()
        console.log({opt})
        await pause()
    };
}

main()