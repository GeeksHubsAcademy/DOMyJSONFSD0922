

/*
    DOM + JSON

*/

// let palabras = document.createTextNode("Estamos en Wayco");

// let cajon = document.createElement("div");

// cajon.appendChild(palabras);

// document.body.appendChild(cajon);

// let azul = document.getElementById("azul");

// const muevete = () => {
    
//     // azul.className = "cajita2"; 
//     azul.classList.add("cajita2");
// };

//JSON + STORAGE


// let salva = {
//     hobbie1 : "luchar",
//     hobbie2 : "ducha",
//     hobbie3 : "futbolin"
// };

// //Aqui estamos convirtiendo a string para guardar
// let convertido = JSON.stringify(salva);

// console.log(salva);
// console.log(convertido);

// //Ahora guardamos en el storage
// localStorage.setItem("datosSalva",convertido);

// //Obtenemos del storage
// let datosDelStorage = localStorage.getItem("datosSalva");

// //Volvemos a convertir a objeto
// let objetoReconvertido = JSON.parse(datosDelStorage);

// //Finalmente volvemos a mostrar por consola
// console.log(datosDelStorage);

let mensaje = document.getElementById("mensaje");

const inputHandler = (ev) => {
    console.log(ev.target.value);
    mensaje.innerHTML = `${ev.target.value}`;
};

