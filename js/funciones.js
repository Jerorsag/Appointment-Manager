import Notificacion from "./classes/Notificacion.js"
import AdminCitas from "./classes/AdminCitas.js"
import { citaObj, editando } from "./variables.js"
import { formulario,formularioInput, pacienteInput, emailInput, deporteInput, sintomasInput, fechaInput } from "./selectores.js";

const citas = new AdminCitas();

export function datosCita(event) {
    citaObj[event.target.name] = event.target.value;
}

export function submitCita(event) {
    event.preventDefault();

    if(Object.values(citaObj).some(valor => valor.trim() === '')) {
        const notificacion = new Notificacion({
            texto: 'Todos los campos son obligatorios',
            tipo: 'error'
        }) 
        notificacion.mostrar();
        return;
    }

    if(editando.value) {
        citas.editar({...citaObj});
        const notificacion = new Notificacion({
            texto: 'Guardado exitosamente',
            tipo: 'exito'
        }) 
        notificacion.mostrar();
    } else {
        citas.agregar({...citaObj})
        const notificacion = new Notificacion({
            texto: 'Paciente Registrado',
            tipo: 'exito'
        }) 
        notificacion.mostrar();
    }
    formulario.reset(); 
    reiniciarObjetoCita();
    formularioInput.value = 'Registrar Paciente';
    editando.value = false;
}

export function reiniciarObjetoCita() {
    // Reiniciar el objeto
    citaObj.id = generarId();
    citaObj.paciente = '';
    citaObj.deporte = '';
    citaObj.email = '';
    citaObj.fecha = '';
    citaObj.sintomas = '';
}

export function generarId() {
    return Math.random().toString(36).substring(2) + Date.now();
}

export function cargarEdicion(cita) {
    Object.assign(citaObj, cita)

    pacienteInput.value = cita.paciente;
    emailInput.value = cita.email;
    deporteInput.value = cita.deporte;
    sintomasInput.value = cita.sintomas;
    fechaInput.value = cita.fecha;

    editando.value = true;
    formularioInput.value = 'Guardar cambios';
}