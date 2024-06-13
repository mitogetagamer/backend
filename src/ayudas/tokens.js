import jwt from "jsonwebtoken";

export function generartoken(payload) {
  return new Promise((resolver, rechazar) => {
    jwt.sign(payload, "llave secreta", { expiresIn: "2h" }, (error, token) => {
      if (error) {
        rechazar({ error });
      } else {
        resolver({ token });
      }
    });
  });
}

export function verificarToken(token) {
  return new Promise((resolver, rechazar) => {
    jwt.verify(token, "llave secreta", (error, decodificado) => {
      if (error) {
        rechazar(error);
      } else {
        resolver(decodificado);
      }
    });
  });
}
