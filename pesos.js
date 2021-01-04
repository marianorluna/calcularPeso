var comenzar = document.getElementById("button-start");
comenzar.addEventListener("click", iniciarCalculo, false);

var g_mercurio = 3.7;
var g_venus = 8.87;
var g_tierra = 9.8;
var g_marte = 3.7;
var g_jupiter = 24.8;
var g_saturno = 10.44;
var g_urano = 8.87;
var g_neptuno = 11.15;
var peso_final;
var nombre;
var usario;
var peso;
var planeta;

function iniciarCalculo()
{
    usuario = prompt("¿Cuál es tu peso en kg?");
    peso = parseFloat(usuario);
    planeta = parseFloat(prompt("Elige un planeta:\n 1 es Mercurio\n 2 es Venus\n 3 es Tierra\n 4 es Marte\n 5 es Júpiter\n 6 es Saturno \n 7 es Urano \n 8 es Neptuno"));
    if (planeta == 1)
    {
        peso_final = peso * g_mercurio / g_tierra;
        nombre = "Mercurio";
    }
    else if (planeta == 2)
    {
        peso_final = peso * g_venus / g_tierra;
        nombre = "Venus";
    }
    else if (planeta == 3)
    {
        peso_final = peso * g_tierra / g_tierra;
        nombre = "Tierra";
    }
    else if (planeta == 4)
    {
        peso_final = peso * g_marte / g_tierra;
        nombre = "Marte";
    }
    else if (planeta == 5)
    {
        peso_final = peso * g_jupiter / g_tierra;
        nombre = "Júpiter";
    }
    else if (planeta == 6)
    {
        peso_final = peso * g_saturno / g_tierra;
        nombre = "Saturno";
    }
    else if (planeta == 7)
    {
        peso_final = peso * g_urano / g_tierra;
        nombre = "Urano";
    }
    else if (planeta == 8)
    {
        peso_final = peso * g_neptuno / g_tierra;
        nombre = "Neptuno";
    }
    else
    {
        nombre = "algún lugar desconocido";
    }
    if (isNaN(peso) || peso <= 0)
    {
        alert("No se puede calcular su peso, porque no es un número válido");
    }
    else if (planeta == 1 || planeta == 2 || planeta == 3 || planeta == 4 || planeta == 5 || planeta == 6 || planeta == 7 || planeta == 8)
    {    
        peso_final = parseFloat(peso_final);
        peso_final = peso_final.toFixed(2);
        alert("Tu peso en "+ nombre +" es " + peso_final + " kg");
    }
    else
    {
        alert("Tu peso en "+ nombre +" es inconmensurable");
    }
}