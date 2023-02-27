let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color:#56377b;"> Diseño y Desarrollo Sitios Web Responsivos con {💗}.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
