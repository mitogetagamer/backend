import modelosEnvios from "../modelos/modelosEnvios.js";
import multer from "multer";
import fsExtra from "fs-extra/esm";

const controladorEnvios = {
  leerEnvio: async (solicitud, respuesta) => {
    try {
      const envioFound = await modelosEnvios.findById(solicitud.params.id);
      if (envioFound._id) {
        respuesta.json({
          resultado: "bien",
          mensaje: "El dato fue leido correctamente",
          datos: envioFound,
        });
      }
    } catch (error) {
      respuesta.json({
        resultado: "Mal",
        mensaje: "El dato fue no pudo ser leido correctamente",
      });
    }
  },
  leerEnvios: async (solicitud, respuesta) => {
    try {
      const enviosFound = await modelosEnvios.find();
      if (enviosFound) {
        respuesta.json({
          resultado: "bien",
          mensaje: "Usuarios leidos correctamente",
          datos: enviosFound,
        });
      }
    } catch (error) {
      respuesta.json({
        resultado: "Mal",
        mensaje: "Los datos  no pudieron ser leidos correctamente",
        datos: "Error",
      });
    }
  },
  crearEnvio: async (solicitud, respuesta) => {
    try {
      const nombreDeUsuario = solicitud.body.nombreDeUsuario;
      const direccion = solicitud.body.direccion;
      const direccion2 = solicitud.body.direccion2;
      const ciudad = solicitud.body.ciudad;

      const nuevoEnvio = new modelosEnvios({
        nombreDeUsuario,
        direccion,
        direccion2,
        ciudad,
      });

      const envioCreado = await nuevoEnvio.save();

      console.log("solicitud body", solicitud.body);
      if (envioCreado._id) {
        respuesta.json({
          resultado: "Bien",
          mensaje: ".. Creando Envio..",
          datos: null,
          //id: Usercreted._id,
        });
      }
    } catch (error) {
      respuesta.json({ error: true, mensaje: "ocurrio un error " });
    }
  },
};

export default controladorEnvios;
