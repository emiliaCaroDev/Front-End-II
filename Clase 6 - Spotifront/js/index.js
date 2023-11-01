
/* --------------------------- listado de albumes --------------------------- */
const albumesFamosos = [{
    id: "x123",
    nombre: "Nevermind",
    imagen: "https://m.media-amazon.com/images/I/71DQrKpImPL._SL1400_.jpg",
    like: true
  },
  {
    id: "y123",
    nombre: "Thriller",
    imagen: "https://img.discogs.com/LfnH5tbhcZ4xRMNLAodIyvea9xA=/fit-in/600x600/filters:strip_icc():format(webp):mode_rgb():quality(90)/discogs-images/R-294033-1151290881.jpeg.jpg",
    like: true
  },
  {
    id: "z123",
    nombre: "The wall",
    imagen: "https://img.discogs.com/EbLYco6R1A-5Z7QJ4t4O1JSzsM8=/fit-in/587x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-4620059-1370165707-3841.jpeg.jpg",
    like: false
  },
  {
    id: "f123",
    nombre: "Abbey Road",
    imagen: "https://cloudfront-us-east-1.images.arcpublishing.com/copesa/RDH5EPH2TNENPI73NBWUWWMLPA.jpg",
    like: false
  },
  {
    id: "a123",
    nombre: "Origin of Symmetry",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_967206-MLA26105577132_102017-O.webp",
    like: false
  },
  {
    id: "p123",
    nombre: "Back in Black",
    imagen: "https://i1.wp.com/www.scienceofnoise.net/wp-content/uploads/2020/07/068660474366a63e1263e53ff370eb50.jpg",
    like: false
  }
];


/* -------------------------------------------------------------------------- */
/*                  FUNCION: renderizar tarjetas del almbumes                 */
/* -------------------------------------------------------------------------- */
const covers = document.querySelector(".covers")



let renderizar = data =>{
  covers.innerHTML = '';
  data.map(item=>{
    return covers.innerHTML += 
      `<li>
        <p>${item.id}</p>
        <h2>${item.nombre}</h2>
        <img src="${item.imagen}">
        <p>
          <i class="fa-solid fa-heart ${item.like ? "favorito": ""}" id="${item.id}"></i>
        </p>  
      </li>`
  })
}

renderizar(albumesFamosos);





const cantAlbums = document.querySelector("#cant-albums");
cantAlbums.innerText += `${albumesFamosos.length} álbumes` 

const cantFavoritos = document.querySelector("#cant-favoritos");

let favoritos = data =>{
  return data.filter(item=> item.like == true)
}

cantFavoritos.innerText +=`${favoritos(albumesFamosos).length} favoritos`;

/* -------------------------------------------------------------------------- */
/*                          FUNCION: marcar favorito                          */
/* -------------------------------------------------------------------------- */

let marcarFavorito = (data)=>{
  const btnLikes = document.querySelectorAll('.fa-heart');
  btnLikes.forEach(btn =>{
    btn.addEventListener('click',()=>{
        data.forEach(item=>{
          item.id === btn.id ? item.like =! item.like  : null ;
        })
        renderizar(albumesFamosos)
        marcarFavorito(albumesFamosos);
    })
  })
}

marcarFavorito(albumesFamosos);