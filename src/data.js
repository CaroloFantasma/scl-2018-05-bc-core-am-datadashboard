//creando fetch del user

fetch(usersJSON)
.then(response => response.json())
.then(data => {
	users = data;
	console.log(data);
	renderUsers(data);
	
})



const renderUsers = users => {
	btn.addEventListener("click", () => {
		const render = users.forEach(element =>{ 
			// element.name ==
			let myUsers = element.name;
			let myListUsers = document.createElement("ul");
			let listItemUsers = document.createElement("li");
			let bItem = document.createElement("button");
			bItem.textContent = myUsers;
			bItem.addEventListener("click", () => {
				students.innerHTML = `<div id="texto">
				<p>${element.name}</p>
				</div>`
			})
			myListUsers.appendChild(bItem);
			students.appendChild(myListUsers);
		
		})
	})
}

//creando fetch del cohort

fetch(cohortsJSON)
.then(response => response.json())
.then(data => {
	cohorts = data;
	console.log(data);
	renderCohorts(data);
	
})
const renderCohorts = cohorts => {
	btn2.addEventListener("click", () => {
		const render = cohorts.forEach(element =>{ 
			// element.name ==
			let myCohorts = element.id;
			let myList = document.createElement("ul");
			let listItem = document.createElement("li");
			let aItem = document.createElement("button");
			aItem.textContent = myCohorts;
			aItem.addEventListener("click", () => {
				students.innerHTML = `<div id="texto">
				<p>${element.name}</p>
				</div>`
			})
			myList.appendChild(aItem);
			container.appendChild(myList);
		
		})
	})
}



window.computeUsersStats = (users,progress,courses) =>{

};

window.sortUsers = (users, orderBy, orderDirection)=>{

};

window.filterUsers =(users, search) =>{

};

window.processCohortData =(options) =>{

};
