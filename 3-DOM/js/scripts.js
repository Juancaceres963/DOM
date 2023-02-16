
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
      console.log("Selector de getElementsByTagName");
      // Este selector va a seleccionar la etiqueta HTML 

      var enlases = document.getElementsByTagName("a");
      console.log(enlases);
      console.log(enlases.length);
      for(let i = 0; i < enlases.length; i++){
        enlases[i].setAttribute("target", "_blank");
      }

      var sideBar = document.getElementById("sidebar").getElementsByTagName("a");
      console.log(sideBar);
      for (let i = 0; i < sideBar.length; i++){
        sideBar[i].setAttribute("href", "http://www.google.com");
      }
})
})();

