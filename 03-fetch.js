// const resp = fetch('https://reqres.in/api/users?page=1')
// console.log(resp);
// resp.then((response)=>{
//     return response.json();
// }).then((json)=>{
//     console.log(json);
// })

const resp = fetch('https://reqres.in/api/users?page=1');
resp.then(response=> response.json())
.then((json)=>{
    //console.log(json);
    let listApi = json.data;
    console.log(listApi);

    let content = document.getElementById('container');
    let htmlX= '';

    json.data.forEach(element => {
        console.log("element")
        console.log(element);

        let card = `<div class="col-4"> <div class="card">
            
          
            <div class="card-body">
                <h5>Email:${element.email}</h5>
                <h5>First name:${element.first_name}</h5>
                <h5>Last name:${element.last_name}</h5>
                <button type="button" data-bs-toggle="modal" data-bs-target="#details" class="btn btn-info center" onclick="findById(${element.id})">Detalles</button>
            </div>
          </div>
        </div>`
        htmlX= htmlX+card;
});
content.innerHTML=htmlX;
    
})



const findById = (id) =>{
  fetch('https://reqres.in/api/users/'+id)
  .then(response => response.json())
  .then(json => {
      console.log(json.data)
      document.getElementById("name").innerHTML = json.data.first_name;
      document.getElementById("last").innerHTML = json.data.last_name;
      document.getElementById("email").innerHTML = json.data.email
      document.getElementById("avatar").src = json.data.avatar
  })
}