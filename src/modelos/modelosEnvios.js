import { Schema, model } from "mongoose";

const esquemaEnvios = new Schema(
  {
    nombreDeUsuario: { type: String, required: true },
    direccion: { type: String, required: true },
    direccion2: { type: String, required: true },
    ciudad: { type: String, required: true },
  },
  { versionKey: false, timestamps: true }
);
export default model("envios: ", esquemaEnvios);
