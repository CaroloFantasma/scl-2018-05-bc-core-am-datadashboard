

const readJSON = progressJSON;
let idProgress = progress.id;
const readUserJSON = usersJSON;
let idUsers = users.id;

function checkType(readJSON) {
	if(idProgress === idUsers){
		if(readJSON.type === "read"){
			add++;
		}
		idProgress.forEach(element => {
		return element.type === "read";
	}
    
}

function myReadFunction() {
    document.getElementById("demo").innerHTML = readJSON.find(checkType);
}
