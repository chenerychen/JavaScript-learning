/* 
while loop not quit keep looping
array to keep info

*/
// alert("Hello")
const todoList = []; 
let input = prompt("What would you like to do?")

while (input.trim().toLowerCase() !== 'quit' && input.toLowerCase() !== 'q') {   // We want to keep this while loop true until enconter q or quit to equal to false and break this while loop

   if  (input.trim().toLowerCase() === "new") {
       let add = prompt("Enter a new todo!") 
       todoList.push(add) 
       console.log(`You have successfulluy added ${add}`)
       input = prompt("What would you like to do?")
   } else if (input.trim().toLowerCase() === "list") {
       for (i = 0; i < todoList.length; i++) {
           console.log(`${i}: ${todoList[i]}`)
       }
       if (todoList.length === 0) {
        console.log("It is empty")
      }
       input = prompt("What would you like to do?")
   } else if (input.trim().toLowerCase() === 'delete') {
        let delNumber  = parseInt(prompt("Enter a number")) 
        if (!Number.isNaN(delNumber)) {
          // console.log(`You have deleted ${todoList.splice(delNumber, 1)}`) 
          let  deletedItem = todoList.splice(delNumber, 1)
          console.log(`You deleted ${deletedItem[0]}`)  // this [0] will check if deleteItem has a valid value or not
            // delNumber = parseInt("Enter a valid number")
        }  else {
          console.log("Invalid Input")
        }
        input = prompt("What would you like to do?")
   } else if (input.trim().toLowerCase() === "quit") {
       break
   } else {
    input = prompt("Please enter new or lst or delete or quit")
   }
}

console.log("You quit the app")