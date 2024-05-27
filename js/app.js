import { pacienteInput, emailInput, deporteInput, sintomasInput, fechaInput, formulario } from "./selectores.js";
import { datosCita, submitCita } from "./funciones.js";

// Eventos 
pacienteInput.addEventListener('change', datosCita);
emailInput.addEventListener('change', datosCita);
deporteInput.addEventListener('change', datosCita);
sintomasInput.addEventListener('change', datosCita);
fechaInput.addEventListener('change', datosCita);
formulario.addEventListener('submit', submitCita)

const footer = document.querySelector('#footer')
footer.classList.add('py-2', 'px-10', 'bg-indigo-600', 'text-white', 'text-center')