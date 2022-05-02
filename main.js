const toDos = [];
toDoNumber = 0;

const enterField = document.querySelector("#enterField");
const unorderedList = document.querySelector("ul");

//When something new is submitted, adds it to the main list
document.querySelector("#toDoForm").addEventListener("submit", function(event){
    event.preventDefault();
    currentToDo = {
        content: enterField.value,
        checked: false,
        toDoValue: toDoNumber
    };
    toDoNumber = toDoNumber + 1;
    toDos.push(currentToDo);
    enterField.value = "";
    printToDo();
})

//Reprints all of the toDos
function printToDo(){
    unorderedList.textContent = "";
    for (let i = 0; i < toDos.length; i++) {
        const template = toDos.map(toDo =>
            `
            <li>
                <p id="p${toDo.toDoValue}">
                <input type="checkbox" id="${toDo.toDoValue}">
                ${toDo.content}
                <button type="button" id="${toDo.toDoValue}">X</button>
                </p>
            </li>
            `
        );
        unorderedList.innerHTML = template.join("");
    }
    //Rechecking and decoration
    for (let i = 0; i < toDos.length; i++) {
        if (toDos[i].checked === true){
            document.getElementById(`p${toDos[i].toDoValue}`).style.textDecoration = "line-through";
            document.getElementById(`${toDos[i].toDoValue}`).checked = true;
        }
    }
}

//Whenever something is clicked
document.addEventListener("mousedown", function(e){
    //Checkbox code
    if(e.target && e.target.type == "checkbox"){
        for (let i = 0; i < toDos.length; i++) {
            if (toDos[i].toDoValue == e.target.id){
                if (toDos[i].checked === true){
                    toDos[i].checked = false;
                    document.getElementById(`p${toDos[i].toDoValue}`).style.textDecoration = "";
                }else{
                    toDos[i].checked = true;
                    document.getElementById(`p${toDos[i].toDoValue}`).style.textDecoration = "line-through";
                } 
            }   
        }
   }

   //Button code
   if(e.target && e.target.type == "button"){
        for (let i = 0; i < toDos.length; i++) {
            if (toDos[i].toDoValue == e.target.id){
                toDos.splice(i,1);
                printToDo();
            }   
        }
    }
});