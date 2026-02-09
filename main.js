/*...........menu toggle scripting ............*/

function showtoggle() {
  document.getElementById("nav_toggle").style.display = "none";
  document.getElementById("nav_menu").style.display = "block";
  document.getElementById("toggle_close").style.display="block"
  document.getElementById("closeimg").style.display="block";
}

function closetoggle(){
    document.getElementById("nav_menu").style.display = "none";
    document.getElementById("nav_toggle").style.display = "block";
    document.getElementById("closeimg").style.display="none";
}