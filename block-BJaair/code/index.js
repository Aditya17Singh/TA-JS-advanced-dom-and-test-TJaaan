let input = document.querySelector("#text");
let root = document.querySelector("div");
let button = document.querySelector("button")
let allNotice = [];


function handleInput(event){
    form.addEventListener("submit" , () => {
        let notice = {
            title: event.target.value,
            category: event.target.value,
            isDone: false,
        }
        allNotice.push(notice);
        event.target.value = ""
        createUI(allNotice)
    })   
}


function createUI(data = allNotice){
   data.forEach((notice,index) => {
       

   }) 
 
}









// let inputText = document.querySelector("#text");
// let rootElm = document.querySelector("ul");
// let all = document.querySelector(".All")
// let active = document.querySelector(".Active")
// let clear = document.querySelector(".clear")
// let completed = document.querySelector(".completed")

// let allTodos = localStorage.getItem("allTodos")
//                ? JSON.parse(localStorage.getItem("allTodos")):
//                  [];


// function handleInput(event){
//    if(event.keyCode === 13 && event.target.value !== ""){
//     let todo = {
//         name: event.target.value,
//         isDone: false,
//     }
//     allTodos.push(todo)
//     event.target.value = "";
//     createUI(allTodos);
//    }
//    localStorage.setItem("allTodos" , JSON.stringify(allTodos));
// }
// function handleDelete(event){
//     let id = event.target.dataset.id;
//     allTodos.splice(id , 1);
//     createUI(allTodos);
//     localStorage.setItem("allTodos" , JSON.stringify(allTodos));

// }
// function handleToggle(event){
//     let id = event.target.dataset.id
//     allTodos[id].isDone = !allTodos[id].isDone;
//     createUI(allTodos);
//     localStorage.setItem("allTodos" , JSON.stringify(allTodos));
// }
// function createUI(data = allTodos){
//     rootElm.innerHTML = "";
//     data.forEach((todo , index) => {
//     let li = document.createElement("li");
//     let input = document.createElement("input");
//     input.type = "checkbox";
//     input.addEventListener("input", handleToggle);
//     input.setAttribute("data-id" , index);
//     input.checked = todo.isDone;
//     let p = document.createElement("p");
//     p.innerText = todo.name;
//     let span = document.createElement("span");
//     span.addEventListener("click" , handleDelete);
//     span.setAttribute("data-id" , index);
//     span.innerText = "❌";
//     li.append(input , p ,span);
//     rootElm.append(li)
//     })
// }



// //It CLEAR ALL COMPLETED TODOS
// clear.addEventListener("click" ,() => {
//    allTodos = allTodos.filter(todo => !todo.isDone);
//    createUI();
//    localStorage.setItem("allTodos" , JSON.stringify(allTodos));
// })

// //IT SHOWS ACTIVE THE TODOS
// active.addEventListener("click" , () => {
//     let notCompleted = allTodos.filter((todo) => !todo.isDone);
//     createUI(notCompleted)
// })

// //IT SHOWS ALL COMPLETED TODOS
// completed.addEventListener("click" , () => {
//     let completedTodos = allTodos.filter((todo) => todo.isDone);
//     createUI(completedTodos)
// })

// //IT SHOWS ALL THE TODOS
// all.addEventListener("click" , () => {
//     createUI();
// })

// inputText.addEventListener("keydown", handleInput);