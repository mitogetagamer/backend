import { Schema, model } from "mongoose";

const esquemaCupcakes = new Schema(
  {
    nombre: { type: String, required: true },
    sabor: { type: String, required: false },
    descripcion: { type: String, required: false },
    imagen: { type: String, required: true },
    precio: { type: Number, required: true },
  },
  { versionKey: false, timestamps: true }
);

export default model("esquema: ", esquemaCupcakes);
