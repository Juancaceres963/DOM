
(function(){
  "use strict";
  //El DOMContentLoaded pasado por el addEventListener le esta diciendo a JS que espere a que el documento 
  // HTML se cargue por completo para luego ejecutar el codigo 
    document.addEventListener("DOMContentLoaded", function(){

      // ===============================Selector getElementById();=============================
      // console.log("Selector getElementById()")

      // var logo = document.getElementById("logo");

      // var navegacion = document.getElementById("navegacion");
      // navegacion.style.display ="none";
      // // Lo bueno de saber manipular el DOM es que nos permite modificar aspectos visuales desde el.
      // // Este codigo le aplica a la variable navegacion un display none.

      // console.log(logo);

      // //1) Este nos permite saber si la variable logo en este caso, cuenta con una clase
      // console.log(logo.hasAttribute("class"));
      // // true

      // //2) Este nos permite saber cual es el nombre del atributo que se solicita, en este caso
      // // la clase se llama logo, en la variable logo que almacena ese elemento
      // console.log(logo.getAttribute("class"));

      // //3) Este nos modifica en este caso la clase de la variable logo. Recibe dos parametros, el 1ro es 
      // //el atributo que modificara, y el segundo el nuevo valor que tendra el atributo.
      // console.log(logo.setAttribute("class", "nueva_clase"));
      // // Este arroja un resultado de "undefined" a la consola pero si se inxpecciona el elemento y su 
      // //clase se puede observar como tiene el nuevo nombre de clase

      //============================Selector getElementsByClassName()====================================
      // Una de las diferencias entre ById y ByClassName es que ByClassName puede devolver varios elelemntos 
      // en un array a lo cual se puede acceder a ellos mediante los corchetes
      // console.log("Selector de getElementsByClassName()")

      // var navegacion = document.getElementsByClassName("navegacion");
      // console.log(navegacion[0]);

      // var contenido = document.getElementsByClassName("contenido");
      // console.log(contenido[0]);

      // contenido[0].style.background = "black";
      //Con este contenido podemos cambiar el background a un color negro, gracias al selector de 
      //getElementsByClassName()

      // ============================Selector de elementos getElementsByTagName======================
      // console.log("Selector de getElementsByTagName");
      // // Este selector va a seleccionar la etiqueta HTML 

      // var enlases = document.getElementsByTagName("a");
      // console.log(enlases);
      // console.log(enlases.length);
      // for(let i = 0; i < enlases.length; i++){
      //   enlases[i].setAttribute("target", "_blank");
      // }

      // var sideBar = document.getElementById("sidebar").getElementsByTagName("a");
      // console.log(sideBar);
      // for (let i = 0; i < sideBar.length; i++){
      //   sideBar[i].setAttribute("href", "http://www.google.com");
      // }

      //==========================Seccion de querySlector()===============================
      // console.log("Seccion de querySlector()");
      // // El querySelector al momento de seleccionar algun elemento lo hace de una forma muy similar a la 
      // // de CSS en su sintaxis para seleccionar elementos. Si es una clase .nombre, si es un id #nombre
      // var logo = document.querySelector(".logo");
      // console.log(logo);
      // // Con querySelectorAll() podemos selecionar todos los elementos que tengan esa clase, o id, o atributo
      // // Sea cual sea el caso que se esta solicitando
      // var encabezado = document.querySelectorAll("h2, footer p");
      // console.log(encabezado);


      // ================== Seccion de Nodos =========================
      // // Es muy importante tener encuenta que el querySelectorAll devuele en forma de array, asi que hay que especificar 
      // // con el numero de index entre llaves cual sera el elemento a modificar.
      // var enlases = document.querySelectorAll("#menu ul li a")[1];
      // console.log(enlases.nodeType);
      // console.log(enlases.nodeName);
      // console.log(enlases.attributes);
      // console.log(enlases.firstChild);
      // console.log(enlases.firstChild.nodeValue);
      // // Luego de ir viendo como se puede acceder a un elemento atravez de DOM y sus diferentes selectores
      // // es importante saber manejarlo para poder editarlo con toda tranquilidad gracias a JavaScript
      // // En el sitio web http://developer.mozilla.org esta todo lo que se puede hacer y ver con respecto a este tema
      // enlases.firstChild.nodeValue = "Home";
      // enlases.id = "mi_id";

      //================= Seccion de como creer contenido =============================

      // var sidebar = document.querySelector("#sidebar");
      // var nuevoElemento = document.createElement("H1");
      // var nuevoTexto = document.createTextNode("Hola desde la interfaz");
      // nuevoElemento.appendChild(nuevoTexto);
      // sidebar.appendChild(nuevoElemento);
      
      // //Creamos la variable para sideBar
      // var enlasesSidebar = document.querySelectorAll("#sidebar ul");

      // //Creamos el elemento A del enlase
      // var nuevoEnlase = document.createElement("A");
      // nuevoEnlase.setAttribute("href", "#");

      // //Creamos el texto que llevara el elemento a
      // var textoEnlase = document.createTextNode("Nuevo enlase");

      // //Creamos la lista que se agregara a las ul 
      // var nuevaLista = document.createElement("LI");

      // // Unimos el enlase nuevo con su texto 
      // nuevoEnlase.appendChild(textoEnlase);
      // //Unimos la lista con el enlase
      // nuevaLista.appendChild(nuevoEnlase);
      // // Unimos la lista con las demas listas
      // enlasesSidebar[0].appendChild(nuevaLista);

      //================= Seccion de como duplicar un nodo =============================
      // // Creando la variable del contenido que queremos duplicar, el main en este caso
      // var contenido = document.querySelectorAll("main");
      // // Dandole el valor de true a el clon del contenido, como realizar la clonacion como tal
      // var nuevoContenido = contenido[0].cloneNode(true);
      // // Creando la variable del lugar al que queremos colocar el clon del contenido
      // var sideBar = document.querySelector("aside");
      // // Insertamos con el insertBefore() la nueva variable clonada, en la posicion que desemos de la 
      // // variable de destino. insertBefore toma dos parametros, el primero lo que vamos a duplicar, y 
      // // el segundo la posicion y lugar de donde vamos a colocarlo
      // sideBar.insertBefore(nuevoContenido, sideBar.childNodes[5]);


      //================= Seccion de como Insertar elementos en un nodo =============================
      // //Creando lista de post populares
      // var sidebar = document.querySelector("aside");
      // var masVisitados = document.createElement("H2");
      // var textoVisitados = document.createTextNode("Post mas Visitados");
      // masVisitados.appendChild(textoVisitados);
      // sidebar.insertBefore(masVisitados, sidebar.childNodes[0]);

      // var contenido = document.querySelectorAll("main h2");
      // console.log(contenido);
      // for (let i = 0; i < contenido.length; i++){
      //   var nuevoElemento = document.createElement("LI");
      //   var textoElemento = document.createTextNode(contenido[i].firstChild.nodeValue);
      //   nuevoElemento.appendChild(textoElemento);
      //   sidebar.insertBefore(nuevoElemento, sidebar.childNodes[1]);
      // }

      //================= Seccion de eliminar nodos =====================

      // var primerArticulo = document.querySelector("article");
      // console.log(primerArticulo);
      // // Para eleminar elementos del DOM no podemos eleminarlos por si mismos, debemos 
      // // hacer como una ruta hasta el padre, para luego por ahi poder eliminarlos
      // primerArticulo.parentNode.removeChild(primerArticulo);

      // var enlase = document.querySelector("#navegacion nav ul li a");
      // console.log(enlase);
      // enlase.parentNode.removeChild(enlase);

      //=================== Seccion Remplazando nodos ==============
})
})();

