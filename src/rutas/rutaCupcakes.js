import { Router } from "express";
import controladorCupcakes from "../controlador/controladorCupcakes.js";
const rutaCupcakes = Router();

rutaCupcakes.post("/", controladorCupcakes.crearMapcake);
rutaCupcakes.get("/:id", controladorCupcakes.leerMapcake);
rutaCupcakes.get("/", controladorCupcakes.leerMapcake);
rutaCupcakes.put("/:id", controladorCupcakes.actualizarMapcake);
rutaCupcakes.delete("/:id", controladorCupcakes.eliminarMapcake);
export default rutaCupcakes;
