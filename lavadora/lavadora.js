const lavadora = {
    "power": false,
    "nivelAgua": 0,
    "nivelLavado": 0,
    "tiempoLavado": 0,
    "enjuague": 0,
    "lavar": false
}

function power(){
    
    if(lavadora.power){
        lavadora.power= false;
    
        document.getElementById('powerBadge').classList.remove('bg-success');
        document.getElementById("powerBadge").classList.add('bg-secondary');
        console.log("lavadora apagada");
        lavadora.nivelAgua=0;
        lavadora.nivelLavado=0;
        lavadora.tiempoLavado=0;
        lavadora.enjuague=0;

    }else{
        lavadora.power= true;
        document.getElementById('powerBadge').classList.remove('bg-secondary');
        document.getElementById("powerBadge").classList.add('bg-success');
        console.log("lavadora prendida");
    }

}

function nivelAgua() {
    console.log("nivel de agua");

    if (!lavadora.power) {
        for (let i = 1; i <= 5; i++) {
            const badge = document.getElementById('s' + i);
            badge.classList.remove('bg-success');
            badge.classList.add('bg-secondary');
        }
        return;
    }

    if (lavadora.nivelAgua === 0) {
        lavadora.nivelAgua = 1;
    } else if (lavadora.nivelAgua === 5) {
        lavadora.nivelAgua = 1;
    } else {
        lavadora.nivelAgua++;
    }

    for (let i = 1; i <= 5; i++) {
        const badge = document.getElementById('s' + i);
        if (i === lavadora.nivelAgua) {
            badge.classList.remove('bg-secondary');
            badge.classList.add('bg-success');
        } else {
            badge.classList.remove('bg-success');
            badge.classList.add('bg-secondary');
        }
    }

    if (!lavadora.power) {
        const activeBadge = document.querySelector('.bg-success');
        if (activeBadge) {
            activeBadge.classList.remove('bg-success');
            activeBadge.classList.add('bg-secondary');
        }
    }
}


function nivelLavado(){
    console.log("nivel lavado");
    if (lavadora.nivelLavado === 0 && lavadora.power === true) {
        lavadora.nivelLavado = 1;
        document.getElementById('normal').classList.remove('bg-secondary');
        document.getElementById('normal').classList.add('bg-success');
    }else if(lavadora.nivelLavado === 1 && lavadora.power === true){
        lavadora.nivelLavado=2;
        document.getElementById('normal').classList.remove('bg-success');
        document.getElementById('normal').classList.add('bg-secondary');
        document.getElementById('medio').classList.remove('bg-secondary');
        document.getElementById('medio').classList.add('bg-success');
    }else if(lavadora.nivelLavado === 2 && lavadora.power === true){
        lavadora.nivelLavado=3;
        document.getElementById('medio').classList.remove('bg-success');
        document.getElementById('medio').classList.add('bg-secondary');
        document.getElementById('pesado').classList.remove('bg-secondary');
        document.getElementById('pesado').classList.add('bg-success');
    }else if(lavadora.nivelLavado === 3 && lavadora.power === true){
        lavadora.nivelLavado=1;
        document.getElementById('pesado').classList.remove('bg-success');
        document.getElementById('pesado').classList.add('bg-secondary');
        document.getElementById('normal').classList.remove('bg-secondary');
        document.getElementById('normal').classList.add('bg-success');
    }
}

function tiempoLavado(){
    console.log("tiempoLavado");
    if(lavadora.tiempoLavado===0 && lavadora.power === true){
        lavadora.tiempoLavado=1;
        document.getElementById('t1').classList.remove('bg-secondary');
        document.getElementById('t1').classList.add('bg-success');
    }else if(lavadora.tiempoLavado===1 && lavadora.power === true){
        lavadora.tiempoLavado=2;
        document.getElementById('t1').classList.remove('bg-success');
        document.getElementById('t1').classList.add('bg-secondary');
        document.getElementById('t2').classList.remove('bg-secondary');
        document.getElementById('t2').classList.add('bg-success');
    }else if(lavadora.tiempoLavado===2 && lavadora.power === true){
        lavadora.tiempoLavado=3;
        document.getElementById('t2').classList.remove('bg-success');
        document.getElementById('t2').classList.add('bg-secondary');
        document.getElementById('t3').classList.remove('bg-secondary');
        document.getElementById('t3').classList.add('bg-success');
    }else if(lavadora.tiempoLavado===3 && lavadora.power === true){
        lavadora.tiempoLavado=4;
        document.getElementById('t3').classList.remove('bg-success');
        document.getElementById('t3').classList.add('bg-secondary');
        document.getElementById('t4').classList.remove('bg-secondary');
        document.getElementById('t4').classList.add('bg-success');
    }else if(lavadora.tiempoLavado===4 && lavadora.power === true){
        lavadora.tiempoLavado=5;
        document.getElementById('t4').classList.remove('bg-success');
        document.getElementById('t4').classList.add('bg-secondary');
        document.getElementById('t5').classList.remove('bg-secondary');
        document.getElementById('t5').classList.add('bg-success');
    }else if(lavadora.tiempoLavado===5 && lavadora.power === true){
        lavadora.tiempoLavado=1;
        document.getElementById('t5').classList.remove('bg-success');
        document.getElementById('t5').classList.add('bg-secondary');
        document.getElementById('t1').classList.remove('bg-secondary');
        document.getElementById('t1').classList.add('bg-success');
    }
}
function enjuague(){
    console.log("enjuague");
    if(lavadora.enjuague===0 && lavadora.power === true){
        lavadora.enjuague=1;
        document.getElementById('e1').classList.remove('bg-secondary');
        document.getElementById('e1').classList.add('bg-success');
    }else if(lavadora.enjuague===1 && lavadora.power === true){
        lavadora.enjuague=2;
        document.getElementById('e1').classList.remove('bg-success');
        document.getElementById('e1').classList.add('bg-secondary');
        document.getElementById('e2').classList.remove('bg-secondary');
        document.getElementById('e2').classList.add('bg-success');
    }else if(lavadora.enjuague===2 && lavadora.power === true){
        lavadora.enjuague=3;
        document.getElementById('e2').classList.remove('bg-success');
        document.getElementById('e2').classList.add('bg-secondary');
        document.getElementById('e3').classList.remove('bg-secondary');
        document.getElementById('e3').classList.add('bg-success');
    }else if(lavadora.enjuague===3 && lavadora.power === true){
        lavadora.enjuague=1;
        document.getElementById('e3').classList.remove('bg-success');
        document.getElementById('e3').classList.add('bg-secondary');
        document.getElementById('e1').classList.remove('bg-secondary');
        document.getElementById('e1').classList.add('bg-success');
        
    }
}

function lavar(){
    console.log("lavando");
    if(lavadora.lavar){
        lavadora.lavar= false;
    
        document.getElementById('lavar').classList.remove('bg-success');
        document.getElementById("lavar").classList.add('bg-secondary');
        
    }else{
        lavadora.lavar= true;
        document.getElementById('lavar').classList.remove('bg-secondary');
        document.getElementById("lavar").classList.add('bg-success');
        console.log("lavadora prendida");
    }
}


/* 
 Necesito que modifiques la función nivelAgua() de modo que cada vez que de doy clic al boton vaya  subiendo un nivel y dependiendo del nivel en el que está (1,2,3,4,5) se cambie el color de badge*/