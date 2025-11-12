import peliculas from './peliculas.js'
// id="genero-53" TRILLER
// id="genero-28" accion
// id="genero-12" AVENTURA



// que debermos hacer :
//---- PILLAR DONDE VAN A IR LAS PELIS(DIV)
//----- COGER LAS PELIS SEGUN GEN CON DOCUMENT.GETELEMENTBYID
//----- USAR DOM PARA PONER CADA PELI DENTRO DE SU GENERO

// ----1-----CON ESTO AÑADIMOS A CADA  VID DEL INDEX HTML, QUE ESTAN  LLAMADAS CON ID A 3 vaRIABLES (SOLO HEMOS ECHO ESO)
const accion28 = document.getElementById('genero-28')
const triller52 =document.getElementById("genero-53")
const aventura12 =document.getElementById("genero-12")




//---2---- CREAMOS UNA ESTRUCCURA PARA RECORRER TODAS LAS PELICULAS...podemos USAR UN FOR, O UN ARRAY QUE ES MEJOR
// con un for

//----2.1--- CREAMOS UN ARRAY PARA CADA UNA DE LAS PELICULAS FUERA DEL FOR
const peliculasaccionYAFILTRADAS   = []
const peliculasthrillerYAFILTRADAS  = []
const peliculasaventuraYAFILTRADAS  = []

for (let i=0;i <peliculas.length;i++ )
    {
    if (peliculas[i].genre_ids.includes(53))
        {
        peliculasthrillerYAFILTRADAS.push(peliculas[i])

        }
    if (peliculas[i].genre_ids.includes(28))
         {
        peliculasaccionYAFILTRADAS.push(peliculas[i])

        }
    if (peliculas[i].genre_ids.includes(12))
        {
        peliculasaventuraYAFILTRADAS.push(peliculas[i])
        }
    }

    // SEPUEDE HACER LO MISMO CON EL FILTER -ARRaY
    //              -----------el filtro-----peli(nombre creado por nosotros)
    // const peliculasaventura = peliculas.filter(peli=> peli..genre_ids.includes(12))
    // console.log(pelisaventura) --- DARa lo mismo que antes
    // SON METODOS PARA ARRAYS Y SOLO ARRAYS  ESTA MANERA SERIA MEJOR ASI QUE HAY QUE HACERLO ASI(aunque voy a dejarlo asi , que lo veo mejor), 



   // PRUEBA----accion28.innerHTML = "PRIMERA PRUEBA " >>>>>> AQUI PODEMOS ASIGNAR AL DIV CON ID 28 - AL CUAL YA LE ASIGNAMOS ANTERIORMENTE ACCION28, algo le escribimos prueba para ver si en el index HACIA ALGO


   //------3-1------ AQUI YA VAMOA PROBAR A QUE EL DIV NOS TIRE LO QUE NECESITAMOS

//    const pelisculasaventuranombre = peliculasaventuraYAFILTRADAS.map(pelis=>pelis.original_title)
//    const pelisculasthrillernombre = peliculasthrillerYAFILTRADAS.map(pelis=>pelis.original_title)
//    const pelisculasaccionnombre = peliculasaccionYAFILTRADAS.map(pelis=>pelis.original_title)
  


//console.log(pelisculasaventuranombre)


// AQUI YA ME ESTA TIRANDO LOS NOMBRES  ---> AQUI QUE SOLO TENEMOS QUE ASIGNAR ESTO A AVENTURA12

//    aventura12.innerHTML = pelisculasaventuranombre
//    accion28.innerHTML  = pelisculasaccionnombre
//    triller52.innerHTML = pelisculasthrillernombre
        //------ AKI YA NOS LA TIRARIA DENTRO DE LOS DIV---- PERO sin estructurar,, ahora trabajararemos con los templates...


const pelisAventura = peliculasaventuraYAFILTRADAS.map(peli => {
  const template = `
    <div class="pelicula">
      <img src="https://image.tmdb.org/t/p/w500${peli.poster_path}" alt="${peli.title}" />
      <h3>${peli.title}</h3>
    </div>
  `;
  return template;
});

const pelisTriller = peliculasthrillerYAFILTRADAS.map(peli=>{

 const template = `
    <div class="pelicula">
      <img src="https://image.tmdb.org/t/p/w500${peli.poster_path}" alt="${peli.title}" />
      <h3>${peli.title}</h3>
    </div>
  `;
  return template;
});

const pelisAccion = peliculasaccionYAFILTRADAS.map(peli=>{

// el poner las backflipc en la const template lo que hacemos es que sea literal y asi creamos html o eso creo

const template = `

    <div class="peliculatam">
      <img src="https://image.tmdb.org/t/p/w500${peli.poster_path}" alt="${peli.title}" />
      <h3>${peli.title}</h3>
    </div>
  `;
  return template;
});

aventura12.innerHTML =pelisAventura.join('')
triller52.innerHTML = pelisTriller.join('')
accion28.innerHTML = pelisAccion.join("")


// A ESTA ALTURAS YA TENEMOS TODO DONDE DEBEMOS ASI QUE TODA TOQUETEAR EL CSS PARA QUE QUEDE TODO BIEN ---> PONEMOS eL tamaños, le damos display flex , gap , padding, flex-wrap, ...etc
