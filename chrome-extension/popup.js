window.addEventListener('load', (event) => {
  console.log("o");
  console.log(document.getElementById("submit"));
  document.getElementById("submit").addEventListener("click", calculate)


  function calculate(){
    const apiUrl="https://jsonplaceholder.typicode.com/comments";
      fetch(`${apiUrl}`)
      .then(response => response.json())
      .then(response => {

        response.forEach(element => {
          var ul = document.getElementById("lists");
            var li = document.createElement("li");
            var li1 = document.createElement("li");
              li.appendChild(document.createTextNode(element.name));
              li1.appendChild(document.createTextNode(element.email));
                ul.appendChild(li);
                ul.appendChild(li1);
                var line=document.createElement("hr")
                ul.appendChild(line);
          console.log(element);
        });
      })
      

  }
});


