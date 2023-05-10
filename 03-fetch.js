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
            
            <div class="card-header">
                 API
            </div>
            <div class="card-body">
                <h5>Email:${element.email}</h5>
                <h5>First name:${element.first_name}</h5>
                <h5>Last name:${element.last_name}</h5>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>`
        htmlX= htmlX+card;
});
content.innerHTML=htmlX;
    
})



const resp2 = fetch('https://reqres.in/api/users?page=1');
resp.then(response=> response.json())
.then((json)=>{
    
    let content = document.getElementById('modal');
    let htmlX= '';

    json.data.id.forEach(element => {
        console.log("element")
        console.log(element);

        let card = `<div class="modal" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Modal title</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p>Modal body text goes here.</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>`
        htmlX= htmlX+card;
});
content.innerHTML=htmlX;
    
})