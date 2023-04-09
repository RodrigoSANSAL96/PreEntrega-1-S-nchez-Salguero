let tamaño=0;

//ESTE ES KILO
function mostrarSaboresKilo(){
    document.getElementById("infoSabores").style.display="";
    tamaño = 1;
}
let eleccion= " ";

function ingresaSabores(){
    for(cantidad=0; cantidad<4; cantidad++){
        eleccion = prompt("elegi los sabores") + " " + eleccion;
    }
    alert("Los sabores que elejiste son" + " " + eleccion);
}

//ESTE ES MEDIO KILO


function mostrarSaboresMedio(){
    document.getElementById("infoSabores2").style.display="";
    tamaño = 2;
}
let eleccion2= " ";

function ingresaSaboresMedio(){
    for(cantidad=0; cantidad<3; cantidad++){
        eleccion2 = prompt("elegi los sabores") + " " + eleccion2;
    }
    alert("Los sabores que elegiste son" + " " + eleccion2);
}

//ESTE ES CUARTO
function mostrarSaboresCuarto(){
    document.getElementById("infoSabores3").style.display="";
    tamaño = 3;
}
let eleccion3= " ";

function ingresaSaboresCuarto(){
    for(cantidad=0; cantidad<2; cantidad++){
        eleccion3 = prompt("elegi los sabores") + " " + eleccion3;
    }
    alert("Los sabores que elegiste son" + " " + eleccion3);
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

