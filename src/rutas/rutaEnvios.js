import { Router } from "express";
import controladorEnvios from "../controlador/controladorEnvio.js";

const rutaEnvios = Router();
rutaEnvios.post("/", controladorEnvios.crearEnvio);
rutaEnvios.get("/:id", controladorEnvios.leerEnvio);
rutaEnvios.get("/", controladorEnvios.leerEnvios);

export default rutaEnvios;
