AOS.init();

AOS.init({
  offset: 120,
  delay: 0,
  duration: 700,
  easing: "ease",
  once: false,
  mirror: false,
  anchorPlacement: "top-bottom",
});

var x = document.getElementById("myBtn");
x.addEventListener("click", myFunction);
x.addEventListener("click", someOtherFunction);

function myFunction() {
  alert("This profile is edited!");
}

function someOtherFunction() {
  alert("You can continue to use Carbs Buddy app!");
}

function myMove() {
  let id = null;
  const elem = document.getElementById("myContainer");
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (pos == 100) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + "px";
      elem.style.left = pos + "px";
    }
  }
}
