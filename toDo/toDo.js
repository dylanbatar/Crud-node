const fs = require('fs')

let listaToDo = []

const crearToDo = (descripcion) => {
    cargarDB()

    let tarea = {
        descripcion,
        completado :false
    }
    listaToDo.push(tarea)
    guardaDB();
}

const guardaDB = () =>{
    // Convertir arreglo a tipo JSON
    let data = JSON.stringify(listaToDo)
    fs.writeFile('./DB/data.json',`${data}`,err=>{
        if(err) throw new Error(`ERROR al crear el archivo`.red)
    })
}

const cargarDB = () => {
    try {
        //cargar el json en la variable para poder persistir los datos
        listaToDo = require('../DB/data.json')
    } catch (error) {
        listaToDo = []
    }
}

const getListado = () => {
    cargarDB()
    listaToDo.forEach(tareas => {
        console.log(`==== Pendientes ==== `)
        console.log(`Descripcion de la tarea : ${tareas.descripcion}`.green)
        console.log(`Estado : ${tareas.completado}`.red)
        console.log(`======================== `)
    });
}

const actualizarToDo= (descripcion,estado) =>{
    cargarDB()
    //obtener el indice de un arreglo si es -1 no se encontro el indice
    let index = listaToDo.findIndex(tareas => tareas.descripcion === descripcion)

    if (index >= 0) {
        listaToDo[index].completado = estado
        guardaDB()
        return true
    }
    else{
        console.log('No se encontro una tarea con este nombre'.red)
        return false
    }    
}   

const borrarToDo = (descripcion) =>{
    cargarDB()
    let indexBorrar = listaToDo.findIndex(tarea =>     tarea.descripcion === descripcion)


    if (indexBorrar >= 0) {
        listaToDo.splice(indexBorrar,1)
        guardaDB()
        return true
    }
    else{
        console.log(`No se encontre la tarea con este nombre ${descripcion}`.red)   
    }
}

module.exports= {
    crearToDo,
    getListado,
    actualizarToDo,
    borrarToDo
}