//require 

let optCrear = {
    descripcion:{
        alias:'d',
        demand:true,
        desc:'descripcion de la tarea por hacer'
    }
}
let optListar = {
    descripcion:{
        alias:'d',
        demand:false,
    },
    completado:{
        alias:'c',
        default:true
    }
}
let optActualizar = {
    descripcion:{
        alias:'d',
        demand:true,
    },
    estado:{
        alias:'e',
        default:true,
        demand:true
    }
}
let optBorrar={
    borrar:{
        alias:'b',
        demand:true,
    },
}

const argv = require('yargs')
                .command('crear','Crear una tarea para hacer ',optCrear)
                .command('listar','Mostrar la tareas por hacer',optListar)
                .command('actualizar','Actualizar una tarea por hacer',optActualizar)
                .command('borrar','Borrar un registro de tarea por hacer',optBorrar)
                .help()
                .argv;

module.exports = {
    argv
}