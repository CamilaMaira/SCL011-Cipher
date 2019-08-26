// declarar variable para el boton cifrar
// que pasa al hacer click > addEventListener
// tomar el valor de text area > getElementById .value
// ese valor transformalo a mayuscula para ser leido por la formula ascii >
// una vez tomado el valor de text area recorrer de "inicio a fin" > let i = 0
// cada letra, transformarla a un valor de codigo ascii > dar funcion con charCodeAt
// ese valor ascii tiene que quedar como numero > parseInt / String.fromCharCode()
// aplicar la formula (x - 65 + n)%26+65
// valor dado imprimirlo en el otro text area


// FUNCION CIFRAR

const btnCifrar = document.getElementById("cifrarButton")
btnCifrar.addEventListener ("click", () => {

let offset = Number.parseInt(document.getElementById("offset").value);
let name = document.getElementById("name").value.toUpperCase();

document.getElementById("resultName").innerHTML = window.cipher.encode(offset,name);

});

// FUNCIÓN DESCIFRAR

const btnDescifrar = document.getElementById("descifrarButton")
btnDescifrar.addEventListener ("click", () => {

let offset = Number.parseInt(document.getElementById("offset").value);
let name = document.getElementById("resultName").value;
  
document.getElementById("resultName").innerHTML = window.cipher.decode(offset,name)

});


// BOTON CLEAN TEXT

const btnClean = document.getElementById("cleanButton");
btnClean.addEventListener ("click", clean);

function clean () {
    document.getElementById("offset").value="";
    document.getElementById("name").value="";
    document.getElementbyId("resultName").value="";
}   


/* BOTON COPIAR

const btnCopy = document.getElementById("copyButton");
btnCopy.addEventListener("click", () => {
let copyText = document.getElementById("name".value);
copyText.select ();
document.execCommand("copy");
alert("copiado " + copyText.value);

});

// imprime desde un boton
//add event listener ...
// <P> solamente con id=msje//
/*const containerMsje = document.getElementById("msje");
containerMsje.innerHTML = ("holi");*/