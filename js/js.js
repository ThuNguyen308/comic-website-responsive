const activePage = window.location.pathname;
document.querySelectorAll('.navbar-nav a').forEach(link => {
    if (link.href.includes(`${activePage}`)){
        link.classList.add('active')
    }
})

function openCity(evt, cityName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-border-red", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.firstElementChild.className += " w3-border-red";
}

document.getElementById("btnxoa").onclick = function() {
  document.getElementById("t").style.display = 'none';
};

/* Không chạy được */
// document.getElementsById("backtop").onclick = function()
// {
//   this.animate({scrollTop: 0},1000);
// }


// to top
var totop = document.getElementById('to-top')
window.onscroll = function(){
  if(window.scrollY > 0){
      totop.style.display = 'block'
  }
  else{
      totop.style.display = 'none'
  }
}




