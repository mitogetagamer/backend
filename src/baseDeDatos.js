import mongoose from "mongoose";
import dotenv from "dotenv";
//recibe como argumento la dirección donde esta la base de datos la cual se saca de:
//en ese link el apartado password se reemplaza por la contraseña del usuario que se le dio en el atlas, OJO IMPORTANTE: para que funcioné se deben borrar los "<>" del aparatdo de password sino no funciona rey
dotenv.config();
mongoose
  .connect(process.env.MONGODB_ATLAS_URI)
  .then((dato) => {
    console.log("conectado exitosamente");
  })
  .catch((error) => {
    console.log("fallo en la conexion");
    console.log(error);
  });
