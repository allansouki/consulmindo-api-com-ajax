

  let = titulo = document.querySelector(".titulo")
  let = clienteId = document.querySelector(".cliente_id")
  let = button =document.querySelector('#puxar')

  button.onclick = function (){

    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(function (json){
   
   
   
   titulo.textContent =json.title
   clienteId.textContent = json.userId
   console.log(json)
   
    })
    
  }


 // fetch('https://jsonplaceholder.typicode.com/todos/1')
  //.then(response => response.json())
 // .then(json =>titulo.textContent =json.title)  

 //fetch('https://jsonplaceholder.typicode.com/todos/1')
 //.then(response => response.json())
 //.then(function (json){



//titulo.textContent =json.title
//clienteId.textContent = json.userId

// })



  
  
  