const activePage = window.location.pathname;
document.querySelectorAll('.nav-item').forEach(page => {
    if (page.href.includes(`${activePage}`)){
        page.classList.add('active')
    }
})

// window.onscroll = function(){
//     var nav = document.getElementById("nav");
//     if (window.scrollY > 50){
//         nav.classList.add("fixed-when-scroll")
//     }
//     else{
//         nav.classList.remove("fixed-when-scroll")
//     }
// }

//Chart Tab
var tabs = document.querySelectorAll('.tab-item')
var detailRanks = document.querySelectorAll('.detail-rank')
tabs.forEach(function(tab, index) {
    tab.onclick = function(){
        var currentActiveTab = document.querySelector('.tab-item.active')
        currentActiveTab.classList.remove('active')
        tab.classList.add('active')

        for ( let i = 0; i < 3; i++){
            if(i==index){
                detailRanks[index].style.display = 'block'
            }
            else{
                detailRanks[i].style.display = 'none'
            }
        };
    }
})

// Back To Top
var totop = document.getElementById('back-to-top')
window.onscroll = function(){
  if(window.scrollY > 300){
      totop.style.display = 'block';
  }
  else{
      totop.style.display = 'none'
  }
}

totop.onclick = function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//Mobile: toggle navbar
var navbarBtn = document.querySelector('.header-mobile__navbar-toggle-btn')
var searchBtn = document.querySelector('.header-mobile__search-btn')
var navbarCollapse = document.querySelector('.navbar-collapse')
navbarBtn.addEventListener('click', () => handleToggleNavbarMobile())
searchBtn.addEventListener('click', () => handleToggleNavbarMobile())

var handleToggleNavbarMobile = () => {
    console.log('h')
    if(navbarCollapse.classList.contains('open')){
        navbarBtn.innerHTML = '<i class="fa-solid fa-bars"></i>'
    } else {
        navbarBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    }
    navbarCollapse.classList.toggle('open')
}

//dropdown 
var dropdownToggles = document.querySelectorAll('.dropdown-toggle')

dropdownToggles.forEach((dropdownToggle) => {
    dropdownToggle.addEventListener('click', (e) => {
        e.preventDefault()
    })
})
