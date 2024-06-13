import mongoose from "mongoose";
//para traer los archvivos de un .env se crea un .env se decralara una varibale con el dato que se quiere esconder, se instala "dotenv", se importa, se da / config y se usa con el process.env. "nombre de la variable"
mongoose.connect(process.env.MONGODB_ATLAS_URI)
//recibe como argumento la dirección donde esta la base de datos la cual se saca de: 
//en ese link el apartado password se reemplaza por la contraseña del usuario que se le dio en el atlas, OJO IMPORTANTE: para que funcioné se deben borrar los "<>" del aparatdo de password sino no funciona rey 

.then((dato)=>{
console.log("conectado exitosamente")
}).catch((error)=>{console.log("fallo en la conexion");})