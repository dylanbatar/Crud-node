const argv = require('./config/yargs').argv
const colors = require('colors')
const toDo = require('./toDo/toDo')


let comando = argv._[0]

switch (comando) {
    case 'crear':
        toDo.crearToDo(argv.descripcion)
        break;
    case 'listar':
        toDo.getListado()
        break;
    case 'actualizar':
        toDo.actualizarToDo(argv.descripcion,argv.estado)
        break;
    case 'borrar':
        toDo.borrarToDo(argv.b)
        break;
    default:
        console.log('comando no encntrado'.red)
        break;
}