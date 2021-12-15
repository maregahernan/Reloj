
const hora  = document.getElementById("Hora");
const fecha = document.getElementById("Fecha");

const meses =["Enero","Febrero","Marzo","Abril",
              "Mayo", "Junio","Julio","Agosto",
              "Septiembre","Octubre","Noviembre","Diciembre"]


const interval = setInterval(()=>{
   
    const local = new Date();

    let dia = local.getDate();
    let mes = local.getMonth();
    let año = local.getFullYear();

    hora.innerHTML = local.toLocaleTimeString();
    fecha.innerHTML = `${dia} de ${meses[mes]} del ${año}`;

},1000);


