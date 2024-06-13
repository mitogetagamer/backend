import { Router } from "express";
import controladorIncio from "../controlador/controladorInicio.js";

const rutasInicio = Router();

rutasInicio.post("/", controladorIncio.iniciarSesion);
rutasInicio.get("/:token", controladorIncio.validarToken);
export default rutasInicio;
