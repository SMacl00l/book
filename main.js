var excuses = [
'They got stuck in the blood pressure cuff at Walmart.',
'They became fascinated with trying to get a ship out of a bottle.',
'Uber surge pricing was 7x',
'They watched Final Destination and can’t leave the house or use technology',
'They mopped themselves into a corner and fell asleep waiting for it to dry.',
'Their freezer broke and in order not to waste the contents, they’re eating 9 tubs of icecream and cooking about 15 pounds of meat',
'They updated their phone and didn’t set the right time zone',
'They installed a new lock on the front door backyards and the key is outside',
'Saturdays Are For The Boys',
'They saw you were the wrong sign',
'They bummed an American Spirit',
];

var bttn = document.getElementById('refresh');
var excuse = document.getElementById('excuse');
var rando = 0;

var makeExcuse = function(){
  rando = Math.floor(Math.random()*excuses.length);
  excuse.innerHTML = excuses[rando];
};

makeExcuse();

bttn.addEventListener('click',function(e){
  e.preventDefault();
  makeExcuse();
});





// detect mouse pos
function objcts() {
  var objects = document.querySelectorAll('.object');
  var mouse;

  document.onmousemove = function(event) { mouse = handleMouseMove(event); };
  setInterval(function() {
    if(mouse) {
      // move the objects around based on mouse movement
      // different rotations add a weird feeling
      for (var i = 0; i < objects.length; i++) {
        var element = objects[i];

        if (i < 10) {

          if (element.classList.contains('object--diamond')) {
            element.style.transform = 'rotate(45deg) translate3D(' + (mouse.x / 15) + '%, ' + (mouse.y / 15) + '%, 0)';
          } else if (element.classList.contains('object--circle')) {
            element.style.transform = 'rotate(90deg) translate3D(' + (mouse.x / 15) + '%, ' + (mouse.y / 15) + '%, 0)';
          } else {
            element.style.transform = 'translate3D(' + (mouse.x / 15) + '%, ' + (mouse.y / 15) + '%, 0)';
          }

        } else if (i < 20) {

          if (element.classList.contains('object--diamond')) {
            element.style.transform = 'rotate(45deg) translate3D(' + (mouse.x / 5) + '%, ' + (mouse.y / 5) + '%, 0)';
          } else if (element.classList.contains('object--circle')) {
            element.style.transform = 'rotate(60deg) translate3D(' + (mouse.x / 5) + '%, ' + (mouse.y / 5) + '%, 0)';
          } else {
            element.style.transform = 'translate3D(' + (mouse.x / 5) + '%, ' + (mouse.y / 5) + '%, 0)';
          }

        } else {

          if (element.classList.contains('object--diamond')) {
            element.style.transform = 'rotate(45deg) translate3D(' + (mouse.x / 2) + '%, ' + (mouse.y / 2) + '%, 0)';
          } else if (element.classList.contains('object--circle')) {
            element.style.transform = 'rotate(20deg) translate3D(' + (mouse.x / 2) + '%, ' + (mouse.y / 2) + '%, 0)';
          } else {
            element.style.transform = 'translate3D(' + (mouse.x / 2) + '%, ' + (mouse.y / 2) + '%, 0)';
          }

        }
      }
    }
  }, 25);
}
objcts();

function handleMouseMove(event) {
  var dot, eventDoc, doc, body, pageX, pageY;

  event = event || window.event; // IE-ism
  // If pageX/Y aren't available and clientX/Y are,
  // calculate pageX/Y - logic taken from jQuery.
  // (This is to support old IE)
  if (event.pageX == null && event.clientX != null) {
      eventDoc = (event.target && event.target.ownerDocument) || document;
      doc = eventDoc.documentElement;
      body = eventDoc.body;

      event.pageX = event.clientX +
        (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
        (doc && doc.clientLeft || body && body.clientLeft || 0);
      event.pageY = event.clientY +
        (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
        (doc && doc.clientTop  || body && body.clientTop  || 0 );
  }
  // Use event.pageX / event.pageY here
  return {x: event.pageX, y: event.pageY};
}
