const listaJuegos = document.getElementById("listaJuegos");
const listaEmpresas = document.getElementById("listaEmpresas");

const callJuegoApi = () => {
  fetch("https://localhost:44364/api/Juegos").then(res => res.json()).then(data => {

    for(i = 0; i < data.length; i++) {

        const juegos = document.createElement('li');
        juegos.setAttribute("class", "gamesList");
        juegos.innerHTML = `<img src="images/${data[i].image}" alt="img-${data[i].image}">
        <h1 class="gameName">${data[i].name}</h1>
        <p class="data">Genero: ${data[i].gender}</p>
        <p class="data">Idioma: ${data[i].languages}</p>
        <p class="data">Empresa Desarrolladora: ${data[i].empresa.name}</p>`
        listaJuegos.appendChild(juegos);
    }

  }).catch(e => console.error(new Error(e)));
}

callJuegoApi();

const callEmpresaApi = () => {
  fetch("https://localhost:44364/api/Empresas").then(res => res.json()).then(data => {

    for(i = 0; i < data.length; i++) {

      const empresas = document.createElement('li');
      empresas.setAttribute("class", "companyList");
      empresas.innerHTML = `<img src="images/ImageEmpresas/${data[i].image}" alt="img-${data[i].image}">
      <h1 class="companyName">${data[i].name}</h1>`
      listaEmpresas.appendChild(empresas);
    }

  }).catch(e => console.error(new Error(e)));
}

callEmpresaApi();



// const callEmpresaAPI = () => {
//     fetch("https://localhost:44364/api/Empresas").then(res => res.json()).then(data => {

//         for(i = 0; i < data.length; i++){
            
//         const empresa = document.createElement('h2');
//         empresa.setAttribute("id", "empres" + data[i].id)
//         empresa.innerText = data[i].name;
//         tituloEmpresa.appendChild(empresa);
            
            

//     }
//   }).catch(e => console.error(new Error(e)));

// }

// callEmpresaAPI();