window.computeUsersStats = (users,progress,courses) =>{

};

window.sortUsers = (users, orderBy, orderDirection)=>{

};

window.filterUsers =(users, search) =>{

};

window.processCohortData =(options) =>{

};

var datosEstudiantes = [];
//asi estaba

const section = document.querySelector("section");

//para obtener el json

let requestURL = "https://api.giphy.com/v1/gifs/search?api_key=G4DYwynEu0QxiDgeh1XbUeQyWhugu5V7&q=&limit=25&offset=0&rating=G&lang=en";
//para crear una nueva solicitud se crea una nueva instancia de objeto de solicitud desde XMLHttpRequest
let request = new XMLHttpRequest();
//esa solicitud se abre con open
request.open("GET", requestURL); //en este ejemplo solo toma dos parametros
//el metodo html a usar que es el GET cuando se hace una solicitud simple 
//y la url a la que se realiza la solicitud
//ahora se debe enviar la solicitud con el metodo send
request.responseType = "json"; //el responseType se programa al json 
request.send();

//ahora falta crear la respuesta a retornar desde el servidor y luego manejarla
request.onload = function(){ //se ha contenido el codigo en un manejador de eventod que se activa cuando el evento carga gatilla cuando la respuesta ha sido retornada de forma exitosa
	let cohorts = request.response; //se almacena la respuesta a la solicitud con response en la var superHeroe
	//se pasa el objeto a dos llamados de funcion, la primera se llena en el header con los datos correctos y la segunda crea la tarjeta de inf de cada heroe el la section
	showCohorts(cohorts);
}
unction showCohorts(jsonObj) {
	let newCohorts = jsonObj["id"]; //se almacena la propiedad member del obj js en una variable, ese arreglo contiene multiples obj que tienen la inf de cada heroe
//se usa el ciclo for para recorrer cada objeto en el arreglo
	for (let i = 0; i<newCohorts.length; i++) {
		let myArticle = document.createElement("article"); //para cada uno se crean elementos nuevos como article, h2,p y ul
		let myPara3 = document.createElement("p"); //superPowers creados en la variable al final
		let myList = document.createElement("ul");

		
		myPara3.textContent = "id: ";

		let superCohorts = newCohorts[i].id; //propiedad powers en esta variable
		for (let j = 0; j < superCohorts.length; j++) { //para recorrer los superpoderes del heroe se usa otro for para cada uno se crea un elemento li, se asigna el superpoder a el y luego se pone el listItem dentro de un elemento ul
			let listItem = document.createElement("li");
			listItem.textContent = superCohorts[j];
			myList.appendChild(listItem);
		}//lo ultimo es agregar los h2, p y ul dentro del article y agregar ese article en la section

 myArticle.appendChild(myPara3);
 myArticle.appendChild(myList);

 section.appendChild(myArticle);
	}
}