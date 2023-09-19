const formulario = document.getElementById("formularioRegistro");
const URL = "https://jsonplaceholder.typicode.com/users";
formulario.addEventListener("submit", function(event) {
    
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const fechaNacimiento = document.getElementById("fechaNacimiento").value;

    var usuarioData = {
        nombre: nombre,
        apellido: apellido,
        fechaNacimiento: fechaNacimiento,
    }

    var jsonData = JSON.stringify(usuarioData);

    // Realiza una solicitud HTTP POST al endpoint
    fetch(URL, {
        method: "POST",
        body: jsonData,
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Error", error);
        }
        return response.json(); //Convirtiendo la respuesta del servidor de json a objeto de JS para poder verla en la consola como un objeto
      })
      .then(data => { //data representa la respuesta del servidor que se ha convertido en un objeto de JS mediante response.json
        console.log('Respuesta del servidor:', data);
        alert('Registro exitoso. Consulta la consola para ver la respuesta del servidor.')
      })
      .catch(error => {
        console.error('Fetch error:', error);
      })
      
    }); 