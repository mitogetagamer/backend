import { Router } from "express";
//en este caso tener presente poner 2 puntoa antes del "/"" para salir un nivel
import ControladorUsuarios from "../controlador/controlador.js"

const enrutadorUsuarios = Router();

enrutadorUsuarios.post('/', ControladorUsuarios.crearUsuario);
  enrutadorUsuarios.get('/:id', ControladorUsuarios.leerUsuario);
  enrutadorUsuarios.get('/', ControladorUsuarios.leerUsuarios);
  enrutadorUsuarios.put('/:id', ControladorUsuarios.actualizarUsuario);
  enrutadorUsuarios.delete('/:id', ControladorUsuarios.eliminarUsuario);

  export default enrutadorUsuarios;