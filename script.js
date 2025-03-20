

  AOS.init({
    duration: 1000, // duration of the animation
    once: true, // animation happens only once
  });
  const text = "Hello, I'm Daniel Olobatoke Timilehin"
  const speed = 100;
  let index = 0;
  const typingElement=
  document.getElementById("typing");

  function type(){
    if (index < text.length) {
      typingElement.textContent += text[index];
      index++;
      setTimeout(type,speed);
    } else{
      setTimeout(() => {typingElement.classList.add("glitch");
      },500);
    }
  }

  type();


  document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Message Sent! I'll get back to you soon.");
    this.reset();
});


