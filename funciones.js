let eleccion = " ";
function mostrarSabores(sabores){
    if(sabores == 1){
        document.getElementById("infoSabores1").style.display="";
    }else if(sabores == 2){
        document.getElementById("infoSabores2").style.display="";
    }else{
        document.getElementById("infoSabores3").style.display="";
    }

}

function mostrar(tamaño){
    eleccion = " ";
    if(tamaño == 1){
        for(cantidad=0; cantidad<4; cantidad++){
            eleccion = prompt("Elegí los sabores") + " " + eleccion;
        }
        alert("Los sabores que elegiste son" + " " + eleccion);
    }
    else if(tamaño == 2){
        for(cantidad=0; cantidad<3; cantidad++){
            eleccion = prompt("Elegí los sabores") + " " + eleccion;
        }
        alert("Los sabores que elegiste son" + " " + eleccion);
    }
    else{
        for(cantidad=0; cantidad<2; cantidad++){
            eleccion = prompt("Elegí los sabores") + " " + eleccion;
        }
        alert("Los sabores que elegiste son" + " " + eleccion);
    }
}

function precio(){
    if (tamaño == 1){
        alert("El kilo de helado te sale $2000");
    }else if (tamaño == 2){
        alert("El 1/2 kilo de helado te sale $1300");
    }else if (tamaño == 3){
        alert("El 1/4 kilo de helado te sale $800");
    }else {
        alert("No elegiste el tamaño");
    }
}

