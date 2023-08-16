const apiButton = document.getElementById('apiButton');//declaras un boton
const apiData = document.getElementById('apiData');
const base_experience = document.getElementById('base_experience')//se obtiene el id definido en html
const tableBody = document.getElementById('data'); // Cambio de ID a 'data'

const callApi = () =>{//esto es una funcion
    alert('Llamando API :D')
    let body= '';
    for (let i =1; i<899; i++){
       
        fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)//esto es una promesa
        .then(res =>  res.json())//se trae la respuesta de la api
        .then(data => {
            console.log(data)
            apiData.innerText= JSON.stringify(data);//convertimos en texto
            base_experience.innerText = `Experiencia Base:${ JSON.stringify(data.base_experience) }`// ` Template literals (Template strings)
            const imageSrc = data.sprites.front_default; // URL de la imagen del Pokémon

            body += `<tr>
                <td>${data.id}</td>
                <td>${data.name}</td>
                <td>${data.base_experience}</td>
                <td>${data.height}</td>
                <td>${data.is_default}</td>
                <td>${data.order}</td>
                <td>${data.weight}</td>

                <img src="${imageSrc}" alt="${data.name}" width="100">
                
            </tr>`

            document.getElementById('data').innerHTML = body;

        })//se extraen los datos de la api
        .catch(e => console.error(new Error(e)));   

    }   
} 

apiButton.addEventListener('click', callApi)//esto es un evento de ventana emergente