const container = document.getElementById('cohorts');
const students = document.getElementById('texto');

//  Variables de la data
const usersJSON = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';
const progressJSON = '../data/cohorts/lim-2018-03-pre-core-pw/progress.json';
const cohortsJSON = '../data/cohorts.json';

//  Variables globales
let users = null;
let progress = null;
let cohorts = null;
let usersStats = null;

// Código de fetch para cohort, progress y users.
// Fetch de la data de cohort
fetch(cohortsJSON)
  .then(response => response.json())
  .then(data => {
    cohorts = data;
    gettingData();

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
    gettingData();

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
    gettingData();

    console.log(data);
    renderCohorts(data);
    if (users && progress && cohorts) {
    }
  });

// Constante de declaración de cohorts

const renderCohorts = cohorts => {
  btn2.addEventListener('click', () => {
    const cohortList = cohorts.forEach(element => {
      // element.name ==
      let myCohorts = element.id;
      let myList = document.createElement('ul');
      let listItem = document.createElement('li');
      let aItem = document.createElement('button');
      aItem.textContent = myCohorts;
      myList.appendChild(aItem);
      container.appendChild(myList);
    });
  });
};

function gettingData() { 
  if (users && progress && cohorts) {
    const cohort = cohorts.find(item => item.id === 'lim-2018-03-pre-core-pw');
    const courses = Object.keys(cohort.coursesIndex);
    usersStats = window.computeUsersStats(users, progress, courses); 
  }
}
function orderedList() {
  const direction = listSort.innerText;
  if (direction === 'ASC') {
    listSort.innerText = 'DESC';
  } else {
    listSort.innerText = 'ASC';
  }
  const sortedUsers = window.sortUsers(usersStats, 'percent', direction);
  studentContainer.innerHTML = '';
  for (let student of sortedUsers) {
    studentContainer.innerHTML += `
        <p>${student.name} ${student.stats.percent}</p>
      `;
  }
}
  
function filterInput() {
  const search = searchInput.value;
  const filteredUsers = window.filterUsers(usersStats, search);
  studentContainer.innerHTML = '';
  filteredUsers.forEach(student => {
    studentContainer.innerHTML += `
        <p>${student.name}</p>
      `;
  });
}

// //  función de cálculo de progreso

// window.computeUsersStats = (users, progress, courses) => {
//   return users.map((user) => {
//     const userProgress = progress[user.id];
//     const users = user.name;
//     let percentSum = 0;
//     let totalCourses = 0;
//     for (let courseIndex in userProgress) {
//       totalCourses++;
//       percentSum += userProgress[courseIndex].percent;
//     }
//     console.log('User > ' + JSON.stringify(user));
//     user.stats = {
//       percent: percentSum / totalCourses
//     };

//     return JSON.stringify(user.name);
//   });
// };


// const renderCohorts = cohorts => {
//   btn2.addEventListener('click', () => {
//         const render = cohorts.forEach(element => {
//           // element.name ==
//           let myCohorts = element.id;
//           let myList = document.createElement('ul');
//           let listItem = document.createElement('li');
//           let aItem = document.createElement('button');
//           aItem.textContent = myCohorts;
//           myList.appendChild(aItem);
//           container.appendChild(myList);
//           aItem.addEventListener('click', () => {
//           let usersStats = window.computeUsersStats(users, progress, Object.keys(element.coursesIndex));
//           let myListUP = document.createElement('ul');
//           let listItemUP = document.createElement('li');
//           let aItemUP = document.createElement('button');
//           aItemUP.textContent = usersStats.sort(); //uso de sort para tener nombres por orden alfabetico
//           myListUP.appendChild(aItemUP);
//           students.appendChild(myListUP);


//           })
//         })
//       });
// }

