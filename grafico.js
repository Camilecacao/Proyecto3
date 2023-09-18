const canvas=document.getElementById ("myChart");


export const grafico= (fechas,casos)=>{
   
    nuevoGrafico= new Chart(canvas, {
        type: 'line',
        data: {
          labels: fechas,
          datasets: [{
            label: '# de casos',
            data: casos,
            borderWidth: 1
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