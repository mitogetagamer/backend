import multer from "multer";
import modeloCupcakes from "../modelos/modeloCupcakes.js";
import fs from "fs-extra";
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
            resultado: "mal",
            mensaje: "Mapcake no fue creado",
            datos: null,
          });
        } else {
          const nuevoMapcake = new modeloCupcakes({
            nombre: solicitud.body.nombre,
            sabor: solicitud.body.sabor,
            descripcion: solicitud.body.descripcion,
            precio: solicitud.body.precio,
            imagen: solicitud.file.filename,
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
      const mapcakeEncontrado = await modeloCupcakes.findById(
        solicitud.params.id
      );
      if (mapcakeEncontrado.id) {
        respuesta.json({
          resultado: "bien",
          mensaje: "Mapcake leído",
          datos: mapcakeEncontrado,
        });
      }
    } catch (error) {
      respuesta.json({
        resultado: "mal",
        mensaje: "ocurrió un error al leer el Mapcake",
        datos: error,
      });
    }
  },
  leerMapcakes: async (solicitud, respuesta) => {
    try {
      const todosLosMapcakes = await modeloCupcakes.find();
      respuesta.json({
        resultado: "bien",
        mensaje: "Mapcakes leídos",
        datos: todosLosMapcakes,
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
      const mapcakeActualizado = await modeloCupcakes.findByIdAndUpdate(
        solicitud.params.id,
        solicitud.body
      );
      if (mapcakeActualizado._id) {
        respuesta.json({
          resultado: "bien",
          mensaje: "Mapcake actualizado",
          datos: mapcakeActualizado._id,
        });
      }
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
      const mapcakeEliminado = await modeloCupcakes.findByIdAndDelete(
        solicitud.params.id
      );
      if (mapcakeEliminado._id) {
        await fs.unlink("imagenes/" + mapcakeEliminado.imagen);
        respuesta.json({
          resultado: "bien",
          mensaje: "Mapcake eliminado",
          datos: null,
        });
      }
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
