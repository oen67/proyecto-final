document.addEventListener('DOMContentLoaded', function () {
  // Efecto de mecanografiado
  const typingText = document.querySelector(".typing-text.typing-animation");
  const cursor = document.querySelector(".cursor");
  const words = ["create", "deploy", "publish"];
  let currentWordIndex = 0;
  let currentLetterIndex = 0;

  function typeWord() {
    if (currentLetterIndex < words[currentWordIndex].length) {
      typingText.textContent += words[currentWordIndex][currentLetterIndex];
      currentLetterIndex++;
      setTimeout(typeWord, 50);
    } else {
      setTimeout(eraseWord, 1000);
    }
  }

  function eraseWord() {
    if (typingText.textContent.length > 0) {
      typingText.textContent = typingText.textContent.slice(0, -1);
      setTimeout(eraseWord, 30);
    } else {
      currentWordIndex = (currentWordIndex + 1) % words.length;
      currentLetterIndex = 0;
      setTimeout(typeWord, 300);
    }
  }

  function blinkCursor() {
    cursor.classList.toggle("cursor-visible");
    setTimeout(blinkCursor, 500);
  }

  typeWord();
  blinkCursor();




  // Efecto de cambio de caja
  const emojiLeft = document.querySelector('.emoji-left');
  const emojiRight = document.querySelector('.emoji-right');
  const emojiVerticalLeft = document.querySelector('.emoji-vertical-left');
  const emojiVerticalRight = document.querySelector('.emoji-vertical-right');

  function animateEmojis() {
    emojiLeft.style.animationName = 'emoji-move-left';
    emojiRight.style.animationName = 'emoji-move-right';
    emojiVerticalLeft.style.animationName = 'emoji-vertical-left-move'; // Nombre de la animación CSS
    emojiVerticalRight.style.animationName = 'emoji-vertical-right-move'; // Nombre de la animación CSS
  }

  animateEmojis();


    document.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightBlock(block);
    });






    // Actualizar contenido dinámicamente
    const dynamicContent = document.querySelector('.dynamic-content');
    const updateButton = document.getElementById('update-button');

    updateButton.addEventListener('click', function () {
      dynamicContent.textContent = '¡Contenido actualizado!';
    });




    
    // Mostrar alerta al enviar el formulario
  const submitButtons = document.querySelectorAll('.submit-button');
  const contactForms = document.querySelectorAll('.contact-form-element');

  contactForms.forEach((form, index) => {
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Evita que el formulario se envíe

      const name = form.querySelector('.name-input').value;
      const email = form.querySelector('.email-input').value;
      const message = form.querySelector('.message-input').value;

      if (name && email && message) {
        alert(`¡Formulario enviado!\nNombre: ${name}\nEmail: ${email}\nMensaje: ${message}`);
      } else {
        alert('Por favor, completa todos los campos.');
      }
    });
  });
});
