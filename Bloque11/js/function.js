
/*document.getElementById('boton').onclick = function (){
    console.log("Efectivamente hiciste click");
    document.getElementById("demo").innerHTML = "Si, por si te quedaban dudas, le diste click";
}

document.addEventListener('click', function(){
    console.log("Ahora hiciste click en cualquier lado");
    document.getElementById("demo").innerHTML = "Ahora haces click en cualquier lado"
});
*/

document.getElementById('boton').addEventListener('click', function() {
    console.log("Ahora hiciste click en cualquier lado");
    document.getElementById("demo").innerHTML = "Ahora haces click en cualquier lado"
})

document.getElementById('boton_color').addEventListener('click', function() {
    document.body.style.backgroundColor = 'red';
})

document.getElementById('boton_default').addEventListener('click', function() {
    document.body.style.backgroundColor = 'aqua';
})

document.getElementById('boton_ocultar').addEventListener('click', function() {
    document.getElementById('demo').style.display = 'none';
})

const collection = document.getElementsByClassName('prueba');
for (let i = 0; i < collection.length; i++){
    collection[i].style.backgroundColor = "green";
}