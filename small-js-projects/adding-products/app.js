// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass

// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');
const list = document.querySelector('#list')

form.addEventListener("submit", function (e)  {
    e.preventDefault(); 
    
    let prt = form.elements.product; 
    let qty = form.elements.qty; 
    
    addP(prt.value, qty.value);  
    
    prt.value = ""; 
    qty.value = ""; 
    
});

function addP (prt, qty) {
    let newP = document.createElement('li')
    newP.innerHTML = prt; 
    newP.innerHTML += "-" + qty 
    list.appendChild(newP)
    
}