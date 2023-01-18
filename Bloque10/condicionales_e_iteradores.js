
//condicional if

var edad = 18;

if (edad > 17){
    console.log("La persona es mayor de edad");
} else {
    console.log("La persona es menor de edad")
}

//iteracion for

for (i=0; i <= 5; i++){
    console.log("El valor de i es: "+i);
}

//iterador while

var x = 10;
while (x > 0){
    console.log("Mi variable vale: "+x);
    x--;
}


//iterador do while

var x = 10;
do {
    console.log("Mi variable vale: "+x);
} while (x > 10);


//break

for (i=0; i <= 10; i++){
    if (i == 5){
        break;
    }
    console.log("El valor de i es: "+i);
}