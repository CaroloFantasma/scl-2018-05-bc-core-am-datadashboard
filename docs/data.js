const btn2 = document.getElementById('btn2');
//  const myInput = document.getElementById('myInput');

myInput.addEventListener('onkeyup', function() {
  filterUsers();
});

//  Constantes de los id donde va el cohort y las alumnas

const container = document.getElementById('cohorts');
const students = document.getElementById('texto')

//  Variables de la data
const usersJSON = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';
const progressJSON = '../data/cohorts/lim-2018-03-pre-core-pw/progress.json';
const cohortsJSON = '../data/cohorts.json';
let users = null;

//  Variables globales
let progress = null;
let cohorts = null;
let usersStats = null;

//  Código de fetch para user, progress y cohort
// Fetch de la data de cohort
fetch(cohortsJSON)
  .then(response => response.json())
  .then(data => {
    cohorts = data;

    console.log(data);
    renderCohorts(data);
    if (users && progress && cohorts) {
    }
  });

//  Fetch de la data progreso
fetch(progressJSON)
  .then(response => response.json())
  .then(data => {
    progress = data;

    console.log(data);
    renderCohorts(data);
    if (users && progress && cohorts) {

    }
  });

//  Fetch de la data de los usuarios

fetch(usersJSON)
  .then(response => response.json())
  .then(data => {
    users = data;

    console.log(data);
    renderCohorts(data);
    if (users && progress && cohorts) {
      return
    }
  });

//  Constante de declaracion de cohorts

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
      aItem.addEventListener('click', () => {
        let usersStats = window.computeUsersStats(users, progress, Object.keys(element.coursesIndex));
        let myListUP = document.createElement('ul');
        let listItemUP = document.createElement('li');
        let aItemUP = document.createElement('button');
        aItemUP.textContent = usersStats.sort(); // Uso de sort para tener nombres por orden alfabético
        myListUP.appendChild(aItemUP);
        students.appendChild(myListUP);
      });
    });
  });
};
//  función de calculo de progreso

window.computeUsersStats = (users, progress, courses) => {
  return users.map((user) => {
    const userProgress = progress[user.id];
    const users = user.name;
    let percentSum = 0;
    let totalCourses = 0;
    for (let courseIndex in userProgress)
    {
      totalCourses++;
      percentSum += userProgress[courseIndex].percent;
    }
    console.log('User > ' + JSON.stringify(user));
    user.stats = {
      percent: percentSum / totalCourses
    };

    return JSON.stringify(user.name);
  });
};

/*

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

 esto no lo borres esta apagado porque todavia no funciona
window.filterUsers = (users, search) => {
	let input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toLowerCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsById("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsById("filter")[0];
        if (a.innerHTML.toLowerCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";

        }
    }
}




window.processCohortData = (options) => {
	renderCohorts();

};
window.computeUsersStats = (users, progress, courses) => {


}

window.filterUsers = (users, search) => {
	

}

window.processCohortData = (options) => {
} 
*/