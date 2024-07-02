const tareaInput = document.querySelector('#tarea');
const boton = document.querySelector('#boton');
let conteoTotal = document.querySelector('#conteoTotal');
let conteoHechas = document.querySelector('#conteoHechas');
const listaTareas = document.querySelector('#listaTareas');

let tareas = [
    {
        id: 1,
        tarea: 'Estudiar JavaScript',
        hecha: false
    },
    {
        id: 2,
        tarea: 'Estudiar React',
        hecha: false
    },
    {
        id: 3,
        tarea: 'Estudiar Node.js',
        hecha: false
    }
];
boton.addEventListener('click', () => {
    const nueva = {
        id: Date.now(),
        tarea: tareaInput.value,
        hecha: false
    }

    tareas.push(nueva);
    tareaInput.value = ""
    
    renderizarTareas();
});

function renderizarTareas() {
    let tareasHTML = "";
    let tareasOk = 0

    
    tareas.forEach((tarea) => {
        tareasHTML += `
            <tr>
                <td class="grande"><label for="tarea-${tarea.id}">${tarea.tarea}</label></td>
                <td class="pequeño"><input type="checkbox" id="tarea-${tarea.id}" ${tarea.hecha ? 'checked' : ''} onclick="actualizarEstado(${tarea.id})"></td>
                <td class="pequeño"><button class="trash" onclick="eliminarTarea(${tarea.id})"><i class="fa-solid fa-trash"></i></button></td>
            </tr>
        `;

        if (tarea.hecha) {
            tareasOk++;
        }
    });

    listaTareas.innerHTML = tareasHTML;

    conteoTotal.textContent = tareas.length;

    conteoHechas.textContent = tareasOk;

}

function actualizarEstado(id) {
    const tarea = tareas.find(t => t.id === id);
    if (tarea) {
        tarea.hecha = !tarea.hecha;
        renderizarTareas();
    }
}

function eliminarTarea(id) {
    tareas = tareas.filter(t => t.id !== id);
    conteoTotal.textContent = tareas.length;
    renderizarTareas();
}

renderizarTareas();
