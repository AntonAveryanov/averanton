const header = document.querySelector("header")
window.addEventListener("scroll" , function() {
    let scrollPos = window.scrollY;
    header.classList.add ("red");
    console.log(scrollPos);
    if (scrollPos > 0) {
        header.classList.add("red");
    }
    else {
        header.classList.remove("red");
    }
} );
  VANTA.WAVES({
    el: "#background",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x5e0088
  })