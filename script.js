var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listli = document.querySelectorAll("#list > li");


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

  //
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
  //

  // Cross the items
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

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

[].forEach.call(listli, el => {
  el.addEventListener('click', ListCross);
})
