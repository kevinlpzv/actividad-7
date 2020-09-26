const operacionflechita= () => {
numero1 = document.getElementById('numero1').value;
numero2 =document.getElementById('numero2').value;
operacion= document.getElementById('operacion').value;

var respuesta=0;
    if(operacion==1){
        var respuesta = parseInt(numero1) + parseInt(numero2);
    }   
    if(operacion == 2){
        var respuesta = parseInt(numero1) - parseInt(numero2);
    }
    if(operacion ==3){
        var respuesta = parseInt(numero1) * parseInt(numero2);
    }
    document.getElementById('respuesta').innerHTML=respuesta;
}