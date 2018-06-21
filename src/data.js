const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('progress');

const container = document.getElementById('cohorts');
//const students = document.getElementById('texto');
const usersJSON = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';
const progressJSON = '../data/cohorts/lim-2018-03-pre-core-pw/progress.json';
const cohortsJSON = '../data/cohorts.json';
let users = null;
let progress = null;
let cohorts = null;



//  creando fetch del user

/*
fetch(usersJSON)
  .then(response => response.json())
  .then(data => {
    users = data;
    console.log(data);
    renderUsers(data);
  });



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
} */




//creando fetch del cohort

fetch(cohortsJSON)
  .then(response => response.json())
  .then(data => {
    cohorts = data;

    console.log(data);
    renderCohorts(data);
  });

const renderCohorts = cohorts => {
    btn2.addEventListener('click', () => {
          const render = cohorts.forEach(element => {
            // element.name ==
            let myCohorts = element.id;
            let myList = document.createElement('ul');
            let listItem = document.createElement('li');
            let aItem = document.createElement('button');
            aItem.textContent = myCohorts;
            myList.appendChild(aItem);
            container.appendChild(myList);
            aItem.addEventListener('click', users => {

              fetch('../data/cohorts/lim-2018-03-pre-core-pw/users.json')
                .then((usersResponse) => { // es una función
                  return usersResponse.json(); // hace la conexión y lo definimos como queremos que nos devuelvan los datos
                })
                .then(function(data) { // otra función
                  let html = '';
                  data.forEach(function(users) {
                    html +=
                      `
        <li>${users.name}</li>`;
                    console.log(data);
                  });
                  document.getElementById('resultado').innerHTML = html;
                })
                .catch((error) => {
                  console.log(error);
                });


            })
          })
        })
  }
/*

window.computeUsersStats = (users, progress, courses) => {

};

//window.sortUsers(users,"name", "ASC")
window.sortUsers = (users, orderBy, orderDirection) => {
  if (orderBy === 'name') {
    return users.sort(function(nameList, nameOrder) {
      if (orderDirection === 'ASC')
        return nameList.name.localeCompare(nameOrder.name);
      else
        return nameList.name.localeCompare(nameOrder.name) * -1;
    });
  }
};

window.filterUsers = (users, search) => {

};

window.processCohortData = (options) => {

};
window.computeUsersStats = (users, progress, courses) => {


}

window.filterUsers = (users, search) => {
}

window.processCohortData = (options) => {
} */