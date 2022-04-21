let notas;
let promedio;
let suma=0;
let alumno = prompt("Ingrese el nombre del alumno ");
let puntaje = parseInt(prompt("Ingrese la cantidad de notas a promediar "));

for(i=1; i<=puntaje; i++){
    let notas = parseInt(prompt("Digite la nota " + i));
    suma = suma + notas;
}

promedio = suma / puntaje;


document.write("<h3 class='texto'>El promedio del alumno</h3>" + alumno + " <h3 class='texto'>es</h3>" + promedio);


