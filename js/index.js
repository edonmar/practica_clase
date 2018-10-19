//Este script añade una funcion a las imagenes de toda la pagina para que se amplien al clickar en ellas y puedas volver
//a tu página original al volver a pinchar en la imagen ampliada

window.onload = function (){
    cuerpo = document.getElementById("contenido");
    fotos = document.getElementsByTagName("img");
    for (let i=0; i<fotos.length;i++){
        ruta = fotos[i].src
        fotos[i].setAttribute("onclick", "agrandar(ruta)");
    } 
}


function agrandar(ruta_foto){
       var ruta_recursos = "img/"
      
        ruta_foto = ruta_foto.substring(ruta_foto.lastIndexOf("/")+1);
        ruta_foto = ruta_recursos + ruta_foto;
        guardar_contenido();
        zoom(ruta_foto);
        
    }
function guardar_contenido(){
     cont_anterior = cuerpo.innerHTML;
}

function volver(){
       cuerpo.innerHTML = cont_anterior;
 }

function zoom(foto){
    
    cuerpo.innerHTML =  "<img src=" +foto+ " class=foto_ampliada onclick='volver()'>";
}
