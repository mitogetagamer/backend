//el esquema da la estructura del documento
import { Schema, model } from "mongoose";

const esquema = new Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true },
  //  username: { type: String, required: true },
  contrasenia: { type: String, required: true },
});
export default model("usuario", esquema);
