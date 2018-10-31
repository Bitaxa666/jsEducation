const ourBtn = document.getElementById("our-btn");
const ourHeadline = document.getElementById("our-headline"); //const ourHeadline = document.querySelector("#our-headline");
const ourList = document.getElementById("our-list");
const listItems = document.getElementById("our-list").getElementsByTagName("li");//const listItems = document.querySelectorAll("#our-list li");
const listOfUsers = document.getElementById("users-all-list");
const userBtnAdd = document.getElementById("add-user-btn");
const userBtnDelete = document.getElementById("del-user-btn");
const findByEmailField = document.getElementById("findByEmail-field");
const resultOfSearch = document.getElementById("results");


var newItemCounter = 1;

// const user1 = {
//     id: 11,
//     name: "Bob",
//     lastName: "Atkins",
//     email: "atkins@gmail.com",
//     year: 19,//     
//     city: "London",
//     scores: {
//         maths: 54,
//         english: 83,
//         science: 95
//         },
//     get fullName() { 
//     return this.name + " " + this.lastName;
//     },
//     set fullName(name1, lastName1) {
//     this.name = name1;
//     this.lastName = lastName1;
//     }
// }

// const user2 = {
//     id: 12,
//     name: "Arnold",
//     lastName: "Schwarz",
//     email: "shwarz@gmail.com",
//     year: 49,
//     scores: {
//         maths: 74,
//         english: 63,
//         science: 85
//         },
//     city: "Beijing",
//     get fullName() { 
//     return this.name + " " + this.lastName;
//     },
//     /*
//     Почему при вызове user2.fullName -> если есть сетер то нейм андефайнд
//     */
//     set name(name1) {
//     this.name = name1;    
//     }
// }

// const user3 = {
//     id: 13,
//     name: "Sylvester",
//     lastName: "Stallonione",
//     email: "stalz@gmail.com",
//     year: 35,
//     scores: {
//         maths: 21,
//         english: 93,
//         science: 75
//         },
//     city: "London",
//     get fullName() { 
//     return this.name + " " + this.lastName;
//     },
//     set fullName(name1, lastName1) {
//     this.name = name1;
//     this.lastName = lastName1;
//     }

/*
Hidden elemnt from HTML
 listItems[0].hidden = true; -> hidden first element.
 */
// for(var i = 0; i < listItems.length; i++){
//     //listItems[i].innerHTML = "Hello world"; - change all elements.
//     listItems[i].addEventListener("click", activateItem);
// }

function Scores(maths, english, science) {
  this.maths = maths;
  this.english = english;
  this.science = science;
}

function User(name, lastName, email, year, city, scores, isUsed = false) {
  this.name = name;
  this.lastName = lastName;
  this.email = email;
  this.year = year;
  this.city = city;
  this.scores = scores;
  this.isUsed = false;
}

//Create new Map of Users;
//let userMap = new Map();
// var userMap = new Map();
var userMap = [];

const scores1 = new Scores(54, 83, 95);
const scores2 = new Scores(72, 61, 91);

const user1 = new User("Bob", "Atkins", "atkins@gmail.com", 19, "London", scores1);
const user2 = new User("Arnold", "Schwarz", "shwarz@gmail.com", 45, "Beijing", scores2);
const user3 = new User("Iron", "Man", "iron@gmail.com", 48, "USA", scores2);
const user4 = new User("Captain", "America", "cap@gmail.com", 82, "Tocyo", scores2);
//Adds user to the list.
userMap.push(user1);
userMap.push(user2);
userMap.push(user3);
userMap.push(user4);

//def user
const userDef = new User('Testname', 'TestlastName', 'test@gmail.com', 11, "London", scores1);

// задание значений
// userMap.set(11, user1);
// userMap.set(12, user2);
// userMap.set(13, user3);
// userMap.set(14, user4);

/*
ourList.addEventListener("click",activateItem);

function activateItem(e) {
    //alert("CLick Ditected!"); - alert if we clicked on on any items/
    // ourHeadline.innerHTML = this.innerHTML;
    // for(var i = 0; i < listItems.length; i++){
    //     listItems[i].classList.remove("active");
    // }
    // this.classList.add("active");
    /*
    or some of other property
    ourHeadline.innerHTML = this.textContent;

    if(e.target.nodeName == "LI") {
        console.log(1 + e);
        ourHeadline.innerHTML = e.target.innerHTML;
        for(var i = 0; i < e.target.parentNode.children.length; i++){
            e.target.parentNode.children[i].classList.remove("active");
        }
        e.target.classList.add("active");
    }
}
*/
//TODO after onload component add first test element.
function generateTestUser(){
    if(allUsersList.length === 0){
        allUsersList.push(userDef);
        addToHtmlUser(userDef, allUsersList, userItem, listOfUsers);
    }
}

//Button for adds users.
userBtnAdd.addEventListener("click", createNewUser);

let allUsersList = [];

function createNewUser() {

    //allUsersList.push(new User)
    //var defaultUser = {name: 'Testname', lastName: 'TestlastName', email: 'test@gmail.com'};
    const userItem = document.createElement('li');
    let isUserAdded = false;

    for (let user of userMap) {
        if (!user.isUsed) {
            isUserAdded = true;
            user.isUsed = true;
            addToHtmlUser(user, allUsersList, userItem, listOfUsers);
            // //let newUser = fullName(user.name, user.lastName, user.email);
            // // add to dom list
            // // const userItem = document.createElement('li');
            // userItem.innerHTML = fullName(user.name, user.lastName, user.email);
            // listOfUsers.appendChild(userItem);
            // // listOfHtml += htmlUserBuilder(user.name, user.lastName, 'li');
            // allUsersList.push(user);

            break;
        }
    }
    if (!isUserAdded) {
        // //let newDefUser = fullName(defaultUser.name, defaultUser.lastName, defaultUser.email);
        // userItem.innerHTML = fullName(userDef.name, userDef.lastName, userDef.email);
        // allUsersList.push(userDef);
        // listOfUsers.appendChild(userItem);
        addToHtmlUser(userDef, allUsersList, userItem, listOfUsers);
    }
    console.log(allUsersList);
}

function addToHtmlUser(user,list,item, listItem){
    item.innerHTML = fullName(user.name, user.lastName, user.email);
    list.push(user);
    listItem.appendChild(item);
}
    // if (!isUserAdded) {
    //     listOfHtml += htmlUserBuilder(defaultUser.name, defaultUser.lastName, 'li');
    // }

    // const user = getUserById(user1.id);
    //
    // if (!user) {
    //     user.isUsed = true;
    //     //
    // } else {
    //     // add user to list console.log('User exists')
    // }

    // userMap.forEach(getMapElements);
    // const user = users.filter((item, key, arr) => {
    //         return item.id === user1.id;
    //     });
    //
    // if (user.length > 1) {
    //     // exist
    // } else {
    //     // not exist
    //
    // }
    // listOfUsers.innerHTML = e.target.innerHTML;
    // let { name: addName, lastName: addLastName, isUsed: isU} = user1;
    // if(!isU){
    //     listOfHtml += htmlUserBuilder(addName, addLastName, 'li');
    //     user1.isUsed = true;
    // } else {
    //     listOfHtml += htmlUserBuilder (defaultUser.name, defaultUser.lastName, 'li');
    // }
//}
//
// function getMapElements(value, key, map) {
//     //console.log("m[" + key + "] = " + value);
//     var usedUsers = [];
//     var defaultUser = {name: 'Test', lastName: 'Test-last'};
//     var listOfHtml = listOfUsers.innerHTML;
//     let { name: addName, lastName: addLastName, isUsed: isU} = value;
//     if(!isU){
//         console.log(value);
//         value.isUsed = true;
//         listOfHtml += htmlUserBuilder(addName, addLastName, 'li');
//     } else {
//         listOfHtml += htmlUserBuilder (defaultUser.name, defaultUser.lastName, 'li');
//     }
// }


//Items in the list
listOfUsers.addEventListener("click", selectUser);
userBtnDelete.addEventListener("click", deleteUser);
let selectItem = null;

function selectUser(e){
    const targetItem = e.target;
    if(targetItem.nodeName == "LI") {
        ourHeadline.innerHTML = targetItem.innerHTML;
        for(let i = 0; i < targetItem.parentNode.children.length; i++){
            targetItem.parentNode.children[i].classList.remove("active");
        }
        targetItem.classList.add("active");
        selectItem = targetItem;
    }
}

function deleteUser() {
    selectItem.remove();
}

let allUsersList2 = ['JavaScript','Kotlin','Rust','PHP','Ruby','Java','MarkDown','Python','C++','Fortran','Assembler'];

findByEmailField.addEventListener('input', e=>renderResultList(findByEmail(e.target.value, allUsersList), resultOfSearch))

//findByEmailField.addEventListener('input', findByEmail);



function findByEmail(val, list){
    //findByEmailField
    // let result=[];
   //return list.filter(i=>(~i.indexOf(val)));
    // result.push(list.filter(i=>(~i.indexOf(e.target.value))));
    // renderResultList(result, resultOfSearch);
    // let result=[];
    // list.forEach(function (result, i) {
    //     (i.email === val) && result.push(i.value);
    // })
    // return result;
    return list.filter(i => (~(i.email).indexOf(val.toLowerCase())));
}

function renderResultList(_list=[],el=document.body){
    el.innerHTML='';
    _list.forEach(i=>{
        let new_el = document.createElement('li');
        new_el.innerHTML=i.email;
        el.appendChild(new_el);
    })
}



function fullName(name, lastName, email){
    return name + " " + lastName + " email is: " + email;
}

function htmlUserBuilder(name, lastName, tagAdd){     
    //return `<${tagAdd}>${name + " " + lastName;}</${tagAdd}>`;
    return `<${tagAdd}>${fullName(name, lastName)}</${tagAdd}>`;
}


ourBtn.addEventListener("click", createNewItem);

function createNewItem() {
    ourList.innerHTML += htmlStringBuilder('Your add element(s) -> ' + newItemCounter++, 'li');
    //newItemCounter++;
}

function htmlStringBuilder(str, tag) {
    return `<${tag}>${str}</${tag}>`;
}




/*
* https://habr.com/post/342922/
* Генерация данных в списке
* На данном этапе код выглядит примерно так:
* let list = ['JavaScript','Kotlin','Rust','PHP','Ruby','Java','MarkDown','Python','C++','Fortran','Assembler']
 const result = document.getElementById('results')
 renderList(list,result)
 function renderList(_list=[],el=document.body){
 _list.forEach(i=>{
 let new_el = document.createElement('li')
 new_el.innerHTML=i
 el.appendChild(new_el)
 })
 }
 Фильтруем значения и все вместе
 let list = ['JavaScript','Kotlin','Rust','PHP','Ruby','Java','MarkDown','Python','C++','Fortran','Assembler']
 const result = document.getElementById('results')
 renderList(list,result)
 function filter(val,list){
 let result=[];
 list.forEach(i=>{
 if(i.indexOf(val)!=-1)
 result.push(i)
 })
 return result;
 }
 function renderList(_list=[],el=document.body){
 _list.forEach(i=>{
 let new_el = document.createElement('li')
 new_el.innerHTML=i
 el.appendChild(new_el)
 })
 }
 document.getElementById('search').addEventListener('input',e=>{
 let new_arr = filter(e.target.value,list)
 renderList(new_arr,result)
 })

 Перепишем -
 function filter(val,list){
 console.time('test')
 return list.filter(i=>(~i.indexOf(val)))
 };

 *******
 * Перепишим краСиво
 * let list = ['JavaScript','Kotlin','Rust','PHP','Ruby','Java','MarkDown','Python','C++','Fortran','Assembler']
 const result = document.getElementById('results')
 renderList(list,result)
 function filter(val,list){
 console.time('test')
 return list.filter(i=>(~i.indexOf(val)))
 };
 function renderList(_list=[],el=document.body){
 el.innerHTML='';
 _list.forEach(i=>{
 let new_el = document.createElement('li')
 new_el.innerHTML=i
 el.appendChild(new_el)
 })
 console.timeEnd('test')
 }
 document.getElementById('search').addEventListener('input',e=>renderList(filter(e.target.value,list),result))

* */
