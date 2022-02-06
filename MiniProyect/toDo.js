console.log("Hola")

const formulario = document.getElementById("formulario");
const input = document.getElementById("input");
const listaTareas = document.getElementById("listaTareas");
const template = document.getElementById("template");
const fragment = document.createDocumentFragment();

//Colección de objetos
let tareas = {
    1644117741613: {
        id: 1644117741613,
        texto: "Tarea #1",
        estado: false
    },
    1644117781148: {
        id: 1644117781148,
        texto: "Tarea#2",
        estado: false
    }
}

//Cuando se lee todo el HTML pinte las tareas.
document.addEventListener("DOMContentLoaded", () =>{
    pintarTareas();
});

listaTareas.addEventListener("click", e => {
    btnAccion(e);
});

//console.log(Date.now());

formulario.addEventListener('submit', e => {
    e.preventDefault();
   // console.log(input.value);

    setTarea(e)

});

//Evaluar si el input contiene algo o no.
const setTarea = e => {
    if(input.value.trim() === ""){
        console.log("esta vacío");
        return;
    }
    //Construimos el objeto
    const tarea = {
        id: Date.now(),
        texto: input.value,
        estado: false
    }
    tareas[tareas.id] = tarea;
    //console.log(tareas);
    formulario.requestFullscreen();
    input.focus();
    pintarTareas();
}

const pintarTareas = () => {
    listaTareas.innerHTML = ""; //Al momento de agregar otra tarea no se añadirán las anteriores
    Object.values(tareas).forEach(tarea => {
        //console.log(tarea);
        //cuando tenemos un template hay que hacer clon primero
        const clone = template.cloneNode(true);
        clone.querySelector("p").textContent = tarea.texto;
        fragment.appendChild(clone);
    })

    listaTareas.appendChild(fragment);
}

const btnAccion = e => {
    
}