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
        const successBadges = document.querySelectorAll('.bg-success');
        successBadges.forEach(badge => {
            badge.classList.remove('bg-success');
            badge.classList.add('bg-secondary');
        });
        lavadora.nivelAgua=0;
        lavadora.nivelLavado=0;
        lavadora.tiempoLavado = 0;
        lavadora.enjuague=3;
        lavadora.lavar=false;
    }else{
        lavadora.power= true;
        document.getElementById('powerBadge').classList.remove('bg-secondary');
        document.getElementById("powerBadge").classList.add('bg-success');
        console.log("lavadora prendida");
    }

}

function nivelAgua() {
    console.log("nivel de agua");
    if(lavadora.nivelAgua  === 0 && lavadora.power === true && lavadora.lavar === false){
        lavadora.nivelAgua = 1;
        document.getElementById('s1').classList.remove('bg-secondary');
        document.getElementById('s1').classList.add('bg-success');
    }else if(lavadora.nivelAgua === 1 && lavadora.power === true && lavadora.lavar === false){
        lavadora.nivelAgua = 2;
        document.getElementById('s1').classList.remove('bg-success');
        document.getElementById('s1').classList.add('bg-secondary');
        document.getElementById('s2').classList.remove('bg-secondary');
        document.getElementById('s2').classList.add('bg-success');
    }else if(lavadora.nivelAgua === 2 && lavadora.power === true && lavadora.lavar === false) {
        lavadora.nivelAgua = 3;
        document.getElementById('s2').classList.remove('bg-success');
        document.getElementById('s2').classList.add('bg-secondary');
        document.getElementById('s3').classList.remove('bg-secondary');
        document.getElementById('s3').classList.add('bg-success');
    }else if(lavadora.nivelAgua === 3 && lavadora.power === true && lavadora.lavar === false){
        lavadora.nivelAgua = 4;
        document.getElementById('s3').classList.remove('bg-success');
        document.getElementById('s3').classList.add('bg-secondary');
        document.getElementById('s4').classList.remove('bg-secondary');
        document.getElementById('s4').classList.add('bg-success');
    }else if(lavadora.nivelAgua === 4 && lavadora.power === true && lavadora.lavar === false){
        lavadora.nivelAgua = 5;
        document.getElementById('s4').classList.remove('bg-success');
        document.getElementById('s4').classList.add('bg-secondary');
        document.getElementById('s5').classList.remove('bg-secondary');
        document.getElementById('s5').classList.add('bg-success');
    }else if(lavadora.nivelAgua === 5 && lavadora.power === true && lavadora.lavar === false){
        lavadora.nivelAgua = 1;
        document.getElementById('s5').classList.remove('bg-success');
        document.getElementById('s5').classList.add('bg-secondary');
        document.getElementById('s1').classList.remove('bg-secondary');
        document.getElementById('s1').classList.add('bg-success');
    }
}

function nivelLavado(){
    console.log("nivel lavado");
    if (lavadora.nivelLavado === 0 && lavadora.power === true && lavadora.lavar === false) {
        lavadora.nivelLavado = 1;
        document.getElementById('normal').classList.remove('bg-secondary');
        document.getElementById('normal').classList.add('bg-success');
    }else if(lavadora.nivelLavado === 1 && lavadora.power === true && lavadora.lavar === false){
        lavadora.nivelLavado=2;
        document.getElementById('normal').classList.remove('bg-success');
        document.getElementById('normal').classList.add('bg-secondary');
        document.getElementById('medio').classList.remove('bg-secondary');
        document.getElementById('medio').classList.add('bg-success');
    }else if(lavadora.nivelLavado === 2 && lavadora.power === true && lavadora.lavar === false){
        lavadora.nivelLavado=3;
        document.getElementById('medio').classList.remove('bg-success');
        document.getElementById('medio').classList.add('bg-secondary');
        document.getElementById('pesado').classList.remove('bg-secondary');
        document.getElementById('pesado').classList.add('bg-success');
    }else if(lavadora.nivelLavado === 3 && lavadora.power === true && lavadora.lavar === false){
        lavadora.nivelLavado=1;
        document.getElementById('pesado').classList.remove('bg-success');
        document.getElementById('pesado').classList.add('bg-secondary');
        document.getElementById('normal').classList.remove('bg-secondary');
        document.getElementById('normal').classList.add('bg-success');
    }
}

function tiempoLavado(){
    console.log("tiempoLavado");
    if(lavadora.tiempoLavado===0 && lavadora.power === true && lavadora.lavar === false){
        lavadora.tiempoLavado=1;
        document.getElementById('t1').classList.remove('bg-secondary');
        document.getElementById('t1').classList.add('bg-success');
    }else if(lavadora.tiempoLavado===1 && lavadora.power === true && lavadora.lavar === false){
        lavadora.tiempoLavado=2;
        document.getElementById('t1').classList.remove('bg-success');
        document.getElementById('t1').classList.add('bg-secondary');
        document.getElementById('t2').classList.remove('bg-secondary');
        document.getElementById('t2').classList.add('bg-success');
    }else if(lavadora.tiempoLavado===2 && lavadora.power === true && lavadora.lavar === false){
        lavadora.tiempoLavado=3;
        document.getElementById('t2').classList.remove('bg-success');
        document.getElementById('t2').classList.add('bg-secondary');
        document.getElementById('t3').classList.remove('bg-secondary');
        document.getElementById('t3').classList.add('bg-success');
    }else if(lavadora.tiempoLavado===3 && lavadora.power === true && lavadora.lavar === false){
        lavadora.tiempoLavado=4;
        document.getElementById('t3').classList.remove('bg-success');
        document.getElementById('t3').classList.add('bg-secondary');
        document.getElementById('t4').classList.remove('bg-secondary');
        document.getElementById('t4').classList.add('bg-success');
    }else if(lavadora.tiempoLavado===4 && lavadora.power === true && lavadora.lavar === false){
        lavadora.tiempoLavado=5;
        document.getElementById('t4').classList.remove('bg-success');
        document.getElementById('t4').classList.add('bg-secondary');
        document.getElementById('t5').classList.remove('bg-secondary');
        document.getElementById('t5').classList.add('bg-success');
    }else if(lavadora.tiempoLavado===5 && lavadora.power === true && lavadora.lavar === false){
        lavadora.tiempoLavado=1;
        document.getElementById('t5').classList.remove('bg-success');
        document.getElementById('t5').classList.add('bg-secondary');
        document.getElementById('t1').classList.remove('bg-secondary');
        document.getElementById('t1').classList.add('bg-success');
    }
}

function enjuague(){
    console.log("enjuague");
    if(lavadora.enjuague===0 && lavadora.power === true && lavadora.lavar === false){
        lavadora.enjuague=1;
        document.getElementById('e1').classList.remove('bg-secondary');
        document.getElementById('e1').classList.add('bg-success');
    }else if(lavadora.enjuague===1 && lavadora.power === true && lavadora.lavar === false){
        lavadora.enjuague=2;
        document.getElementById('e1').classList.remove('bg-success');
        document.getElementById('e1').classList.add('bg-secondary');
        document.getElementById('e2').classList.remove('bg-secondary');
        document.getElementById('e2').classList.add('bg-success');
    }else if(lavadora.enjuague===2 && lavadora.power === true && lavadora.lavar === false){
        lavadora.enjuague=3;
        document.getElementById('e2').classList.remove('bg-success');
        document.getElementById('e2').classList.add('bg-secondary');
        document.getElementById('e3').classList.remove('bg-secondary');
        document.getElementById('e3').classList.add('bg-success');
    }else if(lavadora.enjuague===3 && lavadora.power === true && lavadora.lavar === false){
        lavadora.enjuague=1;
        document.getElementById('e3').classList.remove('bg-success');
        document.getElementById('e3').classList.add('bg-secondary');
        document.getElementById('e1').classList.remove('bg-secondary');
        document.getElementById('e1').classList.add('bg-success');
        
    }
}

function lavar(){
    console.log("lavando");
    if(lavadora.power === true && lavadora.nivelAgua >0 && lavadora.nivelLavado >0 && lavadora.tiempoLavado >0 && lavadora.enjuague >0){
        if(lavadora.lavar){
            lavadora.lavar= false;
        
            document.getElementById('lavar').classList.remove('bg-success');
            document.getElementById("lavar").classList.add('bg-secondary');
            console.log("lavando");
        }else{
            lavadora.lavar= true;
            document.getElementById('lavar').classList.remove('bg-secondary');
            document.getElementById("lavar").classList.add('bg-success');
            console.log("parar");
        }
    }
    
}

