//PARTE I  => elementos y atributos dinamicos

// //creacion de elementos html
// const div = document.createElement("div")
// const img = document.createElement("img")
// const contenedor = document.querySelector(".contenedor")

// //agregamos la clase
// div.classList.add("tarjeta")
// img.classList.add("imagen")

// //nodo padre - metodo -  nodo hijo
// div.appendChild(img)
// contenedor.appendChild(div)

// Recorriendo la lista de img
// const todasLasImg = document.querySelectorAll("img")

// console.log(todasLasImg)

// todasLasImg.forEach(img => {
//     const url = prompt("ingrese url")
//     img.setAttribute("src", url)
// })


//atributos dinamicos I
// img.src = "https://www.hola.com/imagenes/mascotas/20180925130054/consejos-para-cuidar-a-un-gatito-recien-nacido-cs/0-601-526/cuidardgatito-t.jpg"
// img.alt = "imagen-4"

// atributos dinamicos II
// img.setAttribute("src", "https://www.hola.com/imagenes/mascotas/20180925130054/consejos-para-cuidar-a-un-gatito-recien-nacido-cs/0-601-526/cuidardgatito-t.jpg")
// img.setAttribute("alt", "imagen-4")

//PARTE II => intro a eventos
// const button = document.createElement("button")
// const textButton = document.createTextNode("Contador")
// const span = document.createElement("span") 

// button.appendChild(textButton)

// document.body.appendChild(button)

// let contador = 0
// function renderizar() {
//     span.innerText = contador
//     document.body.appendChild(span)
// }
// renderizar()

// button.addEventListener("click", () => {
//     contador++
//     renderizar()
//     console.log(contador)
// })


//*********************************************************** */
/*const img1 = document.querySelector("#imagen-1");

const img2 = document.querySelector("#imagen-2");

const img3 = document.querySelector("#imagen-3");

const imagenes = document.querySelectorAll('img');
imagenes.forEach(imagen=>{
    imagen.setAttribute("width", "250px");
})

const links = document.querySelectorAll('a');
links.forEach(link =>{
    link.setAttribute('target','_blank')
})


let addAtributos= (a,img,url) =>{
    img.setAttribute('src',url);
    a.setAttribute('href',url);
}

const hipervinculo1 = document.querySelector('#a-1');
const hipervinculo2 = document.querySelector('#a-2');
const hipervinculo3 = document.querySelector('#a-3');


addAtributos(hipervinculo1,img1,"https://media.revistavanityfair.es/photos/60e84a97bb9e71d46fd8d1f4/1:1/w_916,h_916,c_limit/39713.jpg");
addAtributos(hipervinculo2,img2,"https://i.insider.com/60772a1742061500181757bc?width=700");
addAtributos(hipervinculo3,img3,"https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/cinefilia/que-tienes-de-ron-weasley/120274313-1-esl-ES/Que-tienes-de-Ron-Weasley.jpg");
*/


/************************   ETAPA 3    ********************************** */
const personajes =[
    {
        imgURL: "https://media.revistavanityfair.es/photos/60e84a97bb9e71d46fd8d1f4/1:1/w_916,h_916,c_limit/39713.jpg",
    },
    {
        imgURL: "https://i.insider.com/60772a1742061500181757bc?width=700"
    },
    {
        imgURL: "https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/cinefilia/que-tienes-de-ron-weasley/120274313-1-esl-ES/Que-tienes-de-Ron-Weasley.jpg"
    }
] 


const contenedor = document.querySelector('.contenedor');

contenedor.innerHTML = '';

let renderizar = data =>{
    data.map(item=>{
        return  contenedor.innerHTML += 
            `<div class="tarjeta">
                <a href="${item.imgURL}" class="rutas-img" target="_blank">
                    <img width=250px class="imagen" alt="imagen-1" src="${item.imgURL}">
                </a>
            </div>`
    })
}


renderizar(personajes);










