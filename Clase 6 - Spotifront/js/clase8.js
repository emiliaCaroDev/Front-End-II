
/* ----------------------------- MESA DE TRABAJO ---------------------------- */
/* -------------------------------------------------------------------------- */
/*                         [5] FUNCION: Eliminar album                        */
/* -------------------------------------------------------------------------- */
// Debemos desarrollar la funcion de eliminar un album. Para esto le vamos a 
// preguntar al usuario cual quiere eliminar.
// Vamos a seguir las indicaciones que nos permiten lograrlo utilizando eventos.
// 1- Hay que escuchar el evento de 'keydown' para detectar cuando el usuario
// presiona la tecla f
// 2- Una vez que detectamos la tecla, debemos mostrarle un prompt al usuario
// para que ingrese el nombre del album que desea eliminar
// 3- Podemos buscar la posicion del almbum buscado en el array con la funcion .findIndex()
// 4- Si la busqueda nos da un resultado válido, procedemos a borrar el objeto del array
// 5- Acto seguido debemos llamar a las funciones de renderizar y marcar favorito para que sean nuevamente aplicadas.



function eliminarAlbum() {
    // desarrollar la función 👇
    window.addEventListener('keydown',(e)=>{
        if(e.key.toLowerCase() == 'f'){
            const nombreAlbumEliminar = prompt('Ingrese el nombre del album que desea eliminar: ')
            const albumAEliminar = albumesFamosos.map(item =>item.nombre).indexOf(nombreAlbumEliminar);
            console.log(albumAEliminar);
            console.log(albumesFamosos.splice(albumAEliminar,1));
            calcularFavoritos();
            renderizar(albumesFamosos);
            marcarFavorito();
        }
    })

}
eliminarAlbum();


