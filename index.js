//check whether something is entered in text box
document.querySelector('#new').onclick = function(){
    if(document.querySelector('.todo').value.length == 0){
        alert("PLease enter a task!")
    }

    else{
        const new_todo = document.querySelector('#hello').value
        console.log(new_todo)
        // task = document.querySelector('#heyy')
        // task.innerHTML += new_todo
        ul = document.querySelector("#todo-list")
        lit = document.createElement('li')
        ul.append(lit)
        lit.setAttribute("class", "todo-task")
        lit.innerHTML += new_todo + '<input type = \"button\" value = \"Delete\" class="del_button" >' + '<input type="button" value="Done" class = "done">';
    }
}  

function delete_todo(){

}

function done_todo(){
    
}
   
