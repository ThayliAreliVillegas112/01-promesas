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
                 Featured
            </div>
            <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>`
        htmlX= htmlX+card;
});
content.innerHTML=htmlX;
    
})



// let table = $("#tabla");
//     table.append(
//         "<tr class='table'>" +
//         "<th scope='col'>#</th>" +
//         "<th scope='col'>email</th>" +
//         "<th scope='col'>first name</th>" +
//         "<th scope='col'>last name</th>" +
//         "<th scope='col'avatar</th>" +
//         "</tr>")

//         for (let i = 0; i < listApi.length; i++) {
            
//             table.append(
//                 "<tr>" +
//                 "<td>" + listApi[i].id + "</td>" +
//                 "<td>" + listApi[i].email + "</td>" +
//                 "<td>" + listApi[i].first_name + "</td>" +
//                 "<td>" + listApi[i].last_name + "</td>" +
//                 "<td>" + listApi[i].avatar + "</td>" +
//                 "</tr>")
//         }