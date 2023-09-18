const canvas=document.getElementById ("myChart");

let nuevoGrafico;
export const grafico= (fechas,casos)=>{
   if (nuevoGrafico){
    nuevoGrafico.destroy()
   }
    nuevoGrafico= new Chart(canvas, {
        type: 'line',
        data: {
          labels: fechas,
          datasets: [{
            label: '# de casos',
            data: casos,
            borderWidth: 1,
            fill: false,
            borderColor: 'rgb(216, 180, 154)',
            tension: 0.1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
  
  }