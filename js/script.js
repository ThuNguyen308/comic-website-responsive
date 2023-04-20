
window.onscroll = function(){
    var nav = document.getElementById("nav");
    if (window.scrollY > 50){
        nav.classList.add("fixed-when-scroll")
    }
    else{
        nav.classList.remove("fixed-when-scroll")
    }
}