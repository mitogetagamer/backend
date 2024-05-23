
console.log("coronamos")
let express = require("express")
const servidor = express()

servidor.get("/", (peticiones,respuestas)=>{
  respuestas.json({
    saludo: "hola, vamos bien"
  })  
} )

servidor.listen(3000)