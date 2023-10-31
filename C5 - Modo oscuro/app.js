const body = document.querySelector('.body');
const btnModoOscuro = document.querySelector('#boton-modo-oscuro');
const titulo = document.querySelector('h1');
const items = document.querySelectorAll('.item');
const subtitulos = document.querySelectorAll('h2');
const parrafos = document.querySelectorAll('p');



btnModoOscuro.addEventListener('click',(e)=>{
    e.preventDefault();
    cambiarTema();
})

let cambiarTema = ()=>{
    body.classList.toggle('dark');
    titulo.classList.toggle('h1-dark');
    items.forEach(item =>{
        item.classList.toggle('item-dark');
    })
    subtitulos.forEach(item =>{
        item.classList.toggle('font-color-dark');
    })
    parrafos.forEach(item =>{
        item.classList.toggle('font-color-dark');
    })
}
