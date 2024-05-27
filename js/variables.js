import {generarId} from "./funciones.js"

let editando = {
    value: false
}

// Objeto de Cita
const citaObj = {
    id: generarId(),
    paciente: '',
    email: '',
    deporte: '',
    sintomas: '',
    fecha: ''
}

export {
    editando,
    citaObj
}