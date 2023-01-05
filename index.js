let body = document.querySelector("#body");
let modeInput = document.querySelector(".mode-input");
let form = document.querySelector(".form");
let todoInput = document.querySelector(".todo-input");
let todoList = document.querySelector(".todo-list");

modeInput.addEventListener("click", function(){
   body.classList = [
    modeInput.checked ? "dark-mode" : "light-mode"
   ]
})


form.addEventListener("submit", function(e) {
   e.preventDefault();


   //// create li ///
   let item = document.createElement("li");
   item.classList.add("item");

   //// create div ///
   let div = document.createElement("div");
   div.classList.add("item__div");

   //// create btn to check ///
   let check = document.createElement("btn")
   check.classList.add("check-btn");
   // check.type = "checkbox";
   div.append(check);

   //// take input value ////
   let text = document.createElement("p")
   text.classList.add("text");
   text.innerHTML = todoInput.value;
   div.append(text);

   let remove = document.createElement("p")
   remove.classList.add("remove");
   div.append(remove);
   



   todoInput.value = '';
   item.append(div);
   todoList.append(item);
})


todoList.addEventListener("click", function(e){
   e.preventDefault();
   let item = e.target;

   if(item.classList.contains("check-btn")){
      let todo = item.parentElement;

      if(!todo.classList.contains("completed")){
         todo.classList.add("completed");
      } else{
         todo.classList.remove("completed");
      }
   }

   if(item.classList.contains("remove")){
      let todo = item.parentElement;
      todo.classList.add("deleted");
      todo.addEventListener("clicked", e => {
         todo.remove();
      })
   }
})





