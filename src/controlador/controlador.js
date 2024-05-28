const ControladorUsuarios = {
 
  crearUsuario:async (solicitud, respuesta) => {
      
        try{
          console.log("solicitud body", solicitud.body);
          if (solicitud.body.nombre === "") throw new Error("falta el nombre");
          if (solicitud.body.email === "") throw new Error("falta el email");
          if (solicitud.body.username === "") throw new Error("falta el user");
          if (solicitud.body.contrasenia === "") throw new Error("la contraseña es incorrecta o no fue digitada");
          if (solicitud.body.cpassword === ""  )throw new Error("las contraseñas no coinciden o no fueron digitadas");
          respuesta.json({mensaje: "POST usuario works!"});}
          catch(error) {respuesta.json({error: true,mensaje: "ocurrio un error "})
           
          }

      
  },
      leerUsuario: async (solicitud, respuesta) => {
        try {
          console.log(solicitud.params.id);
          respuesta.json({mensaje: "GET usuario work!"});
        } catch (error) {
          console.log("error",error);
          respuesta.json({error:true, mensaje:"Se complica"});
        }
        
      },
      leerUsuarios:async (solicitud, respuesta) => {
        try {
          respuesta.json({mensaje: "GET usuarios works!"});
        } catch (error) {
          respuesta.json({error:true, mensaje:"Se complica"});
        }
        
      },
      actualizarUsuario:async (solicitud, respuesta) => {
      try {
        console.log("id: ",solicitud.params.id);
        console.log("solicitud body: ",solicitud.body);
        respuesta.json({mensaje: "PUT Actualizar usuario works!"});
      } catch (error) {
        respuesta.json({error:true, mensaje:"Se complica"});
      }
      },
      eliminarUsuario: async(solicitud, respuesta) => {
        try {
          console.log("id: ", solicitud.params.id);
          respuesta.json({mensaje: "Delete eliminar usuario works"})
        } catch (error) {
          console.log("error: ", error);
          respuesta.json({error:true, mensaje: "DELETE usuario works!"});
        }
       
      }
      
      
}

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