//----------------------------------------VARIABLES

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listli = document.querySelectorAll("#list > li");
var spanerr = document.getElementById('isinvalid');


//----------------------------------------FUNCTIONS

function inputLength() {
  return input.value.length;

}

// toggle active on the list
function ListCross() {
  this.classList.toggle('done');
}

function CloseBtn() {
  var btn = document.getElementsByClassName('close');
}

function createListElement() {
  var li = document.createElement("li");
  var div = document.createElement("div");
  li.appendChild(document.createTextNode(input.value));
  input.value = "";

  // Colored Tags
  var color = '#' + Math.floor(Math.random() * 16777215).toString(16);
  var colorString = color;
  div.style['background-color'] = colorString;


  // add a div that contain li and span
  div.appendChild(li);
  div.classList.add("div");
  ul.appendChild(div);


  // add a closing btn
  var btn = document.createElement('span');
  div.appendChild(btn);
  btn.classList.add("close");
  btn.innerHTML = "&times;";

  // update the items
  listli = document.querySelectorAll("#list > .div > li");


  //Remove function
  var closebtns = document.getElementsByClassName("close");
  var i;
  for (i = 0; i < closebtns.length; i++) {
    closebtns[i].addEventListener("click", function() {
      this.parentElement.remove();
    });
  }


  // Cross the new items
  [].forEach.call(listli, el => {
    el.addEventListener('click', ListCross);
    el.addEventListener('click', CloseBtn);
  })


  //------------------------------------------------------
  // Test for color div while click or HOVER

  //  var menuBoxes = document.getElementsByClassName('div');
  //  for (var i = 0; i < menuBoxes.length; i++) {
  /*   menuBoxes[i].onmouseover = function(e) {
         var color = '#'+Math.floor(Math.random()*16777215).toString(16);
         var colorString = color;
         this.style['background-color'] = colorString ;
     }*/
  //    menuBoxes[i].onclick = function(e) {
  //      var color = '#' + Math.floor(Math.random() * 16777215).toString(16);
  //      var colorString = color;
  //this.style['background-color'] = colorString;
  //    }
  //  }
  //---------------------------------------------------------


}

function get_value() {
  var inputlength1 = input.value.length;
  document.getElementById('count').innerHTML = inputlength1 + "/" + "20";
}


function maxChar() {
  input.style.background = "#ffdddd";
  input.style.color = "black";
  spanerr.style.display = "flex";
  input.value = "";
}

function InputReset() {
  input.style.background = "#2d3436";
  input.style.color = "#eee";
  spanerr.style.display = "none";
}

function addListAfterClick() {
  if (inputLength() > 0 && inputLength() < 20) {
    createListElement();
    InputReset();
  } else if (inputLength() >= 20) {
    maxChar();
  }


}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13 && inputLength() < 20) {
    createListElement();
    InputReset();
  } else if (inputLength() >= 20 && event.keyCode === 13) {
    maxChar();
  }
}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

// Cross the existing items
[].forEach.call(listli, el => {
  el.addEventListener('click', ListCross);
})


//-----------------------------darkMode

const moonPath =
  "M18 27.5C18 42.6878 27.5 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C27.5 0 18 12.3122 18 27.5Z";
const circlePath =
  "M55 27.5C55 42.6878 42.6878 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C42.6878 0 55 12.3122 55 27.5Z";

const darkMode = document.querySelector("#darkMode");
let toggleStatus = false;

darkMode.addEventListener("click", () => {
  const timeline = anime.timeline({
    duration: 750,
    easing: "easeOutExpo"
  });

  morphTo(timeline, toggleStatus);

  toggleStatus = !toggleStatus;
});

function morphTo(timeline, toggler) {
  timeline
    .add({
      targets: ".circle",
      d: [{
        value: toggler ? circlePath : moonPath
      }]
    })
    .add({
        targets: ".circle",
        fill: toggler ? "#FFC700" : "#eee"
      },
      "-=500"
    )
    .add({
        targets: "#darkMode",
        rotate: toggler ? 40 : 320
      },
      "-=700"
    )
    .add({
        targets: "body",
        backgroundColor: toggler ? "#eee" : "#2d3436"
      },
      "-=700"
    )
    .add({
        targets: "h1,p,#count",
        color: toggler ? "#2d3436" : "#eee"
      },
      "-=700"
    )
    .add({
        targets: ".line1",
        backgroundColor: toggler ? "#2d3436" : "#eee"
      },
      "-=800"
    )
    .add({
        targets: "#enter",
        color: toggler ? "#2d3436" : "#eee"
      },
      "-=700"
    )
    .add({
        targets: "#enter :hover",
        color: toggler ? "#2d3436" : "#eee"
      },
      "-=700"
    )
    .add({
        targets: "#userinput",
        border: toggler ? "1px solid" : "1px solid"
      },
      "-=700"
    )
    .add({
        targets: ".item1,.item2,.item3",
        backgroundColor: toggler ? "#2d3436" : "#eee",
        color: toggler ? "#eee" : "#2d3436"
      },
      "-=600"
    )
    .add({
        targets: "#isinvalid",
        color: toggler ? "#fc2828" : "#ffb2b2"
      },
      "-=1000"
    );

}


// Animate Title :
// Wrap every letter in a span
var textWrapper = document.querySelector('.ml11 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({
    loop: false
  })
  .add({
    targets: '.ml11 .line',
    scaleY: [0, 1],
    opacity: [0.5, 1],
    easing: "easeOutExpo",
    duration: 700
  })
  .add({
    targets: '.ml11 .line',
    translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
  }).add({
    targets: '.ml11 .letter',
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 700,
    offset: '-=775',
    delay: (el, i) => 30 * (i + 1)
  });
