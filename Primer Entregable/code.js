/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

const fila = document.querySelector('#fila');

const sitio = document.querySelector("#sitio");

const body = document.querySelector("body");

const sobreMi = document.querySelector("#sobre-mi");

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  const inputNombre = prompt('Ingresa tu nombre');
  const inputAnioNacimiento = prompt('Ingresa el año en que naciste');
  const inputCiudad = prompt('Ingresa la ciudad en donde vives');
  const inputTeGustaJavascript = confirm('¿Te interesa Javascript?');

  datosPersona.nombre = inputNombre;
  datosPersona.edad = parseInt(2023 - inputAnioNacimiento);
  datosPersona.ciudad = inputCiudad;
  datosPersona.interesPorJs = inputTeGustaJavascript ? 'Si' : 'No'
  
  return datosPersona;

}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  const data = obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  const nombre = document.querySelector("#nombre");
  const edad = document.querySelector("#edad");
  const ciudad = document.querySelector("#ciudad");
  const interesJS = document.querySelector("#javascript");
  
  nombre.innerText = data.nombre;
  edad.innerText = data.edad;
  ciudad.innerText = data.ciudad;
  interesJS.innerText = data.interesPorJs;


}


function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  fila.innerHTML = '';

  listado.forEach(item=>{
    return fila.innerHTML+= 
                            `<div class="caja">
                              <img src="${item.imgUrl}" alt="${item.lenguajes}">
                              <h2 class="lenguajes">${item.lenguajes}</h2>
                              <p class="bimestre">${item.bimestre}</p>
                            </div>
                            `
  })

}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  sitio.classList.toggle("dark");



}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */

body.addEventListener('keypress',(e)=>{
  e.key === 'f' ? sobreMi.classList.remove("oculto"): null ;
})