//todo ..........EJERCICIO 17 ..........

//El usuario ingresa 3 notas.
//Por consola o alerta le mostramos el promedio y el mensaje si esta aprobado o desaprobado;

let primerNota = parseInt(prompt("Ingresar la primera nota:"));
let seugndaNota = parseInt(prompt("Ingresar la segunda nota:"));
let terceraNota = parseInt(prompt("Ingresar la tercera nota:"));

promedio = (primerNota + seugndaNota + terceraNota) / 3;

alert(`El promedio del alumno es: ${promedio}`);

if(promedio >= 6){
    alert("El alumno está 'APROBADO'");
}else{
    alert("Alumno 'DESAPROBADO'");
}