import { grafico } from "./grafico.js"; //es para traer la fx desde grafico js
const formulario = document.getElementById("formulario");
const imput = document.getElementById("pais");
const data = document.getElementById("data");


const buscar = async (evento) => {
  evento.preventDefault();
  const respuesta = await fetch(
    `https://api.api-ninjas.com/v1/covid19?country=${
        imput.value
    }`,
    { headers: { "X-Api-Key": "ghPkuNJMvM2bUs4F/DhBIQ==FsSs3G2Y7o5FmOco" } }
  );
  const datos= await respuesta.json()
  console.log(datos)
  const datosMuestreo=(datos[0].cases)
  const fechas= Object.keys(datosMuestreo)
  const casos= Object.values(datosMuestreo)
  const casosTotales=casos.map((caso)=>{
    return caso.total
  })
 
//   console.log(respuesta);
grafico(fechas,casosTotales)
  // console.log(imput.value)
  formulario.reset();
};

formulario.addEventListener("submit", buscar);

