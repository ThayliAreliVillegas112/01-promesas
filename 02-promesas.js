// function sumarUno(numero, callback){
    
// }

function sumarUnoPromesa(numero){
    console.log(numero);
    var promesa = new Promise(function(resolve, reject){ //resolve en caso de que se ejecute correctamente y reject en caso de que haya una excepción

        if(numero>=7){
            reject("Numero muy grande");
            return;
        }
        
        setTimeout(function(){
            resolve(numero+1);
        },2000)
    });

    return promesa;
}
// console.log(sumarUnoPromesa(5));
// sumarUnoPromesa(5).then(function(nuevoValor){
//     console.log(nuevoValor);
//     sumarUnoPromesa(nuevoValor).then(function(nuevoValor){
//         console.log(nuevoValor);
//         sumarUnoPromesa(nuevoValor).then(function(nuevoValor){
//             console.log(nuevoValor);
            
//         })
//     })
// })

//el .then atiende la promesa *unicamente para promesas
// sumarUnoPromesa(5).then((nuevoValor)=>{
//     console.log(nuevoValor);
//     return sumarUnoPromesa(nuevoValor);
// }).then((nuevoValor)=>{
//     console.log(nuevoValor);
//     return sumarUnoPromesa(nuevoValor);
// }).then((nuevoValor)=>{
//     console.log(nuevoValor);
// })

// sumarUnoPromesa(5)
// .then(nuevoValor=>{
//     //console.log(nuevoValor)
//     return sumarUnoPromesa(nuevoValor);
// }).then(nuevoValor=>sumarUnoPromesa(nuevoValor))
// .then(sumarUnoPromesa).catch((err)=>{
//     console.log(err);
// })

sumarUnoPromesa(5)
.then(sumarUnoPromesa)
.then(sumarUnoPromesa)
.then(sumarUnoPromesa)
.catch((err)=>{
    console.log(err);
})