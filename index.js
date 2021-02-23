var container = document.createElement("div")
container.className = "container";
document.body.appendChild(container)


var sound = new Howl({
    src: ['606BD_06_TapeSat.wav']
  });
var sound2 = new Howl({
    src: ['highHat.wav']
  });
var sound3 = new Howl({
    src: ['AM_80sOrch_130-A.wav'],
    loop: true
  });
  var sound4 = new Howl({
    src: ['laserPerc.wav']
  });
var sound5 = new Howl({
    src: ['heavyTom.wav']
  });
var sound6 = new Howl({
    src: ['AM_CopMono_130-A.wav'],
    loop:true
});

var pad1 = document.createElement("div");
pad1.className = "pads";
pad1.id = "#pad1";
pad1.textContent = 'Kick Drum'
pad1.addEventListener("click", function() {
      sound.play();
})
container.appendChild(pad1);

var pad2 = document.createElement("div");
pad2.className = "pads";
pad2.id = "#pad2";
pad2.textContent ="High Hat"
pad2.addEventListener("click", function() {
      sound2.play();
})
container.appendChild(pad2);

var pad3 = document.createElement("div");
pad3.className = "pads";
pad3.id = "#pad3";
pad3.textContent = 'Orchestra'
container.appendChild(pad3);
pad3.addEventListener("click", function() {
      sound3.play();
})

var pad4 = document.createElement("div");
pad4.className = "pads";
pad4.id = "#pad4";
pad4.textContent = 'Snare'
pad4.addEventListener("click", function() {
      sound4.play();
})
container.appendChild(pad4);

var pad5 = document.createElement("div");
pad5.className = "pads";
pad5.id = "#pad5";
pad5.textContent = "Heavy Tom"
container.appendChild(pad5);
pad5.addEventListener("click", function() {
      sound5.play();
})

var pad6 = document.createElement("div");
pad6.className = "pads";
pad6.id = "#pad6";
pad6.textContent = "Background"
container.appendChild(pad6);
pad6.addEventListener("click", function() {
      sound6.play();
      
})

function keyPad () {
    window.addEventListener('keydown',(event) =>{
        if(event.key === 'a') {
        sound.play()   
        } else if(event.key === 's') {
        sound2.play()
        } else if(event.key === 'd') {
        sound3.play()
        } else if(event.key === 'j') {
        sound4.play()
        } else if(event.key === 'k') {
        sound5.play()
        } else if(event.key === 'l') {
        sound6.play()
        } else if(event.key === 'p') {
            off();
        } else {
            return
        }
    });ls
    
}

keyPad()