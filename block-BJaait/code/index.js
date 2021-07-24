let form = document.querySelector("form");
let input = document.querySelector("#text");
let ul = document.querySelector("ul");
let button = document.querySelector("button")

let allNotice = JSON.parse(localStorage.getItem("cards")) || []

form.addEventListener("submit" , (event) => {
    event.preventDefault();
    let title = event.target.elements.title.value;
    let category = event.target.elements.category.value;
    allNotice.push({title,category});
    localStorage.setItem("cards" , JSON.stringify(allNotice));
    createUI(allNotice,ul);
});

function handleEdit(event,info ,id){
    let elm = event.target 
    let input = document.createElement('input')
    input.value = info
    input.addEventListener("keyup" ,(e) => {
        if(e.keyCode === 13){
            let updatedValue = e.target.value
            allNotice[id].category = updatedValue
            createUI()
            localStorage.setItem("cards" , JSON.stringify(allNotice));
        }
    })
    let parent = event.target.parentElement;
    parent.replaceChild(input,elm)

}

function createUI(data = allNotice,root = ul){
    ul.innerHTML = ""
    let fragment = new DocumentFragment()
   data.forEach((cardInfo,index) => {
       let li = document.createElement("li")
       let p = document.createElement("p")
       p.addEventListener("dblclick" , (event) =>
        handleEdit(event,cardInfo.category,index)
       )
       p.innerText = cardInfo.category;
       let h2 = document.createElement("h2")
       h2.innerText = cardInfo.title
       li.append(p,h2)
       fragment.append(li)
   }) 
  root.append(fragment);
}

createUI(allNotice,ul)