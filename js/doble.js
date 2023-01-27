const tamano = document.getElementById("tamano");
const mensaje=document.getElementById("div");
var arrays= [1];

function double() {
mensaje.classList.add('h5','alert','alert-success','col-xl-4');
    for (var i=1; i<tamano.value; i++)
        arrays.push((arrays[i-1]*2));
    mensaje.innerHTML= arrays;
}
