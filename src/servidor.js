import express from "express";
import enrutadorUsuarios from "./rutas/rutas.js";
//para importar el morgan se instala con -D para ponerlo en las dependencias de desarrollo y se llaman unsando el servidor.use(morgan("dev"))
import morgan from "morgan";
import cors from "cors";
import rutasInicio from "./rutas/rutasInicio.js";
const servidor = express();
servidor.use(morgan("dev"));
servidor.use(cors());
servidor.use(express.json());
// La parte entre comillas va a ser la ruta que se le asigna en el servidor
servidor.use("/usuarios", enrutadorUsuarios);
servidor.use("/inicio-sesion", rutasInicio);

servidor.get("/", (solicitud, respuesta) => {
  respuesta.status(404).send("No encontrado");
});

export default servidor;
