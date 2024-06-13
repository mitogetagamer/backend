import bcryptjs from "bcryptjs";
import { generartoken, verificarToken } from "../ayudas/tokens.js";
import modelo from "../modelos/modelo.js";
//import { verify } from "jsonwebtoken";

const controladorIncio = {
  iniciarSesion: async (solicitud, respuesta) => {
    try {
      const { nombre, contrasenia } = solicitud.body;

      const UserFound = await modelo.findOne({
        email: nombre,
      });
      const contraseniavalidada = await bcryptjs.compare(
        contrasenia,
        UserFound.contrasenia
      );

      if (contraseniavalidada) {
        const token = await generartoken({
          id: UserFound._id,
          nombre: UserFound.nombre,
        });
        respuesta.json({
          resultado: "bien",
          mensaje: "acceso permitido",
          datos: token,
        });
      } else {
        respuesta.json({
          resultado: "mal",
          mensaje: "acceso denegado",
          datos: null,
        });
      }
    } catch (error) {
      respuesta.json({
        resultado: "mal",
        mensaje: "ocurrió un error al iniciar sesión",
        datos: error,
      });
    }
  },
  validarToken: async (solicitud, respuesta) => {
    try {
      const token = solicitud.params.token;
      const decodificado = await verificarToken(token);
      if (decodificado.id) {
        respuesta.json({
          resultado: "bien",
          mensaje: "El token es valido",
          datos: decodificado,
        });
      } else {
        respuesta.json({
          resultado: "mal",
          mensaje: "token no válido",
          datos: null,
        });
      }
    } catch (error) {
      respuesta.json({
        resultado: "mal",
        mensaje: "ocurrió un error al validar token",
        datos: error,
      });
    }
  },
};

export default controladorIncio;
