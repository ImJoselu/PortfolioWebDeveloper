'use strict';

function mostrarInformacion() {
    var elemento = document.getElementById("tarjetaInformacion1");
    elemento.classList.toggle("active");
}

function mostrarInformacionDos(){
    var elemento = document.getElementById("tarjetaInformacion2");
    elemento.classList.toggle("active");
}

// Palabras a mostrar y tiempos de espera
const textArray = ["Hola, mundo! 👋", "Soy Jose Luis Tórtola" ,"Hello, world! 👋", "I´m Jose Luis Tórtola"];
const speed = 200; // Velocidad de escritura en milisegundos
let index = 0; // Índice de la palabra actual
let isDeleting = false; // Indicador de si está borrando

function type() {
  const text = textArray[index];
  const textContainer = document.getElementById('text-container');

  if (isDeleting) {
    // Borrando
    textContainer.textContent = text.substring(0, textContainer.textContent.length - 1);
  } else {
    // Escribiendo
    textContainer.textContent = text.substring(0, textContainer.textContent.length + 1);
  }

  // Velocidad de escritura o borrado
  let typeSpeed = isDeleting ? speed / 2 : speed;

  // Verificar si debe cambiar de palabra
  if (!isDeleting && textContainer.textContent === text) {
    typeSpeed = 1000; // Esperar un segundo antes de borrar
    isDeleting = true;
  } else if (isDeleting && textContainer.textContent === '') {
    isDeleting = false;
    index = (index + 1) % textArray.length; // Cambiar a la siguiente palabra
  }

  setTimeout(type, typeSpeed);
}

// Iniciar la animación
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(type, speed);
});

function scrollToTop() {
  window.scroll({
      top: 0,
      behavior: 'smooth'
  });
}

function scrollToBottom() {
  window.scroll({
      top: document.body.scrollHeight,
      behavior: 'smooth'
  });
}

document.addEventListener("DOMContentLoaded", function() {
  const scrollToTopButton = document.getElementById("scrollToTop");
  const scrollToBottomButton = document.getElementById("scrollToBottom");

  window.addEventListener("scroll", function() {
      if (window.pageYOffset > 100) {
          scrollToTopButton.style.display = "block";
      } else {
          scrollToTopButton.style.display = "none";
      }

      if (window.innerHeight + window.pageYOffset < document.body.offsetHeight - 100) {
          scrollToBottomButton.style.display = "block";
      } else {
          scrollToBottomButton.style.display = "none";
      }
  });
});

$(document).ready(function() {
  // Cuando se envía el formulario
  $("#contact-form").submit(function(e) {
      e.preventDefault(); // Evita que se recargue la página

      // Simulación de envío de datos (puedes reemplazar esto con una solicitud AJAX real)
      setTimeout(function() {
          // Mostrar el mensaje de éxito
          $("#message-popup").addClass("show");
          $("#contact-form")[0].reset(); // Limpiar el formulario

          // Ocultar el mensaje después de 3 segundos
          setTimeout(function() {
              $("#message-popup").removeClass("show");
          }, 3000);
      }, 1500);
  });
});
