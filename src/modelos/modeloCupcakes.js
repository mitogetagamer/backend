import { Schema, model } from "mongoose";

const esquemaCupcakes = new Schema(
  {
    nombre: { type: String, required: true },
    sabor: { type: String, required: true },
    descripcion: { type: String, required: false },
    imagen: { data: Buffer, contentType: String },
  },
  { versionKey: false, timestamps: true }
);

export default model("esquema: ", esquemaCupcakes);
