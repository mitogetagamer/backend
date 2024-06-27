import bcrypt from "bcryptjs";
import modelo from "../modelos/modelo.js";
const ControladorUsuarios = {
  crearUsuario: async (solicitud, respuesta) => {
    try {
      const nombre = solicitud.body.nombre;
      const email = solicitud.body.email;
      const contrasenia = solicitud.body.contrasenia;

      const contraseniaProtegida = await bcrypt.hash(contrasenia, 10);
      const nuevoUser = new modelo({
        nombre,
        email,
        contrasenia: contraseniaProtegida,
      });
      const Usercreted = await nuevoUser.save();

      console.log("solicitud body", solicitud.body);
      if (Usercreted._id) {
        respuesta.json({
          resultado: "Bien",
          mensaje: ".. Creando Usuario..",
          datos: null,
          //id: Usercreted._id,
        });
      }
    } catch (error) {
      respuesta.json({ error: true, mensaje: "ocurrio un error " });
    }
  },
  leerUsuario: async (solicitud, respuesta) => {
    try {
      const UserFound = await modelo.findById(solicitud.params.id);
      if (UserFound._id) {
        respuesta.json({
          resultado: "bien",
          mensaje: "El dato fue leido correctamente",
          datos: UserFound,
        });
      }
    } catch (error) {
      respuesta.json({
        resultado: "Mal",
        mensaje: "El dato fue no pudo ser leido correctamente",
      });
    }
  },
  leerUsuarios: async (solicitud, respuesta) => {
    try {
      const UsersFound = await modelo.find();
      if (UsersFound) {
        respuesta.json({
          resultado: "bien",
          mensaje: "Usuarios leidos correctamente",
          datos: UsersFound,
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
  actualizarUsuario: async (solicitud, respuesta) => {
    try {
      const Actualizar = await modelo.findByIdAndUpdate(
        solicitud.params.id,
        solicitud.body
      );
      if (Actualizar._id) {
        respuesta.json({
          resultado: "bien",
          mensaje: "El dato fue  actualizado correctamente",
          datos: Actualizar._id,
        });
      }
    } catch (error) {
      respuesta.json({
        resultado: "Mal",
        mensaje: "El dato fue no pudo ser actualizado correctamente",
        datos: "error",
      });
    }
  },
  eliminarUsuario: async (solicitud, respuesta) => {
    try {
      const Eliminar = await modelo.findByIdAndDelete(solicitud.params.id);
      if (Eliminar._id) {
        respuesta.json({
          resultado: "bien",
          mensaje: "El dato fue  eliminado correctamente",
          datos: null,
        });
      }
    } catch (error) {
      respuesta.json({
        resultado: "Mal",
        mensaje: "El dato fue no pudo ser leido correctamente",
        datos: "error",
      });
    }
  },
};

export default ControladorUsuarios;

/*
const  usuario = { 

nombre: "augustin",
 email: "alfredo@gmail",
 username: "alfredo123",
 contrasenia: "1234",
 cpassword:"1234",
 CC:"12345678",
 foto: "",
 pais:"Colombia"
}
*/
