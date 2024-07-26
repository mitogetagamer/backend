import "dotenv";
import servidor from "./servidor.js";
//se importa el archivo que esta llamando al moongose osea el que esta haciendo la conexión entre la BD
import "./baseDeDatos.js";

servidor.listen(3000, () => {
  console.log("Servidor corriendo en el puerto 3000");
});
