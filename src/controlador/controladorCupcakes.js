import multer from "multer";
import modeloCupcakes from "../modelos/modeloCupcakes.js";

const controladorCupcakes = {
  crearMapcake: async (solicitud, respuesta) => {
    try {
      const almacenamiento = multer.diskStorage({
        destination: "imagenes",
        filename: (req, file, cb) => {
          cb(null, file.originalname);
        },
      });
      const carga = multer({
        storage: almacenamiento,
      }).single("imagen");
      carga(solicitud, respuesta, async (error) => {
        if (error) {
          respuesta.json({
            resultado: "bien",
            mensaje: "Mapcake  creado",
            datos: null,
          });
        } else {
          const nuevoMapcake = new modeloCupcakes({
            nombre: solicitud.body.nombre,
            sabor: solicitud.body.sabor,
            descripcion: solicitud.body.descripcion,
            imagen: {
              data: solicitud.file.filename,
              contentType: "image/png",
            },
          });
          const mupcakeCreado = await nuevoMapcake.save();
          if (mupcakeCreado._id) {
            respuesta.json({
              resultado: "bien",
              mensaje: "El mapcake se creo correctamente",
              datos: mupcakeCreado._id,
            });
          }
        }
      });
    } catch (error) {
      respuesta.json({
        resultado: "mal",
        mensaje: "ocurrió un error al crear el Mapcake",
        datos: error,
      });
    }
  },
  leerMapcake: async (solicitud, respuesta) => {
    try {
      respuesta.json({
        resultado: "bien",
        mensaje: "Mapcake leído",
        datos: null,
      });
    } catch (error) {
      respuesta.json({
        resultado: "mal",
        mensaje: "ocurrió un error al leer el Mapcake",
        datos: error,
      });
    }
  },
  leerMapcake: async (solicitud, respuesta) => {
    try {
      respuesta.json({
        resultado: "bien",
        mensaje: "Mapcakes leídos",
        datos: null,
      });
    } catch (error) {
      respuesta.json({
        resultado: "mal",
        mensaje: "ocurrió un error al leer todas los Mapcakes",
        datos: error,
      });
    }
  },
  actualizarMapcake: async (solicitud, respuesta) => {
    try {
      respuesta.json({
        resultado: "bien",
        mensaje: "Mapcake actualizado",
        datos: null,
      });
    } catch (error) {
      respuesta.json({
        resultado: "mal",
        mensaje: "ocurrió un error al actualizar Mapcake",
        datos: error,
      });
    }
  },
  eliminarMapcake: async (solicitud, respuesta) => {
    try {
      respuesta.json({
        resultado: "bien",
        mensaje: "Mapcake eliminado",
        datos: null,
      });
    } catch (error) {
      respuesta.json({
        resultado: "mal",
        mensaje: "ocurrió un error al eliminar Mapcake",
        datos: error,
      });
    }
  },
};

export default controladorCupcakes;
