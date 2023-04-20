window.onscroll = function(){
    var subnav = document.getElementById('sub-nav')
    var totop = document.getElementById('to-top')
    if(window.scrollY > 0){
        totop.style.display = 'block'
    }
    else{
        totop.style.display = 'none'
    }
    if(window.scrollY > 170){
        subnav.classList.add('fixed-when-scroll')
    }
    else{
        subnav.classList.remove('fixed-when-scroll')
        
    }
  }

window.onload = function(){
    var prevBtns = document.getElementsByClassName('prev-chapter')
    var nextBtns = document.getElementsByClassName('next-chapter')
    var length = prevBtns.length
    for (var i = 0; i < length; i ++){
        if(prevBtns[i].getAttribute('href') === '#'){
            prevBtns[i].classList.add('disabled')
        }
        if(nextBtns[i].getAttribute('href') === '#'){
            nextBtns[i].classList.add('disabled')
        }
    }
}

document.getElementById('follow').onclick= function(){
	if(this.classList.contains('unfollow')){
		this.innerHTML= `<i class="fas fa-heart"></i> Theo dõi`
	}
	else{
		this.innerHTML= `<i class="fas fa-heart-broken"></i> Hủy theo dõi`
	}
	this.classList.toggle('unfollow')
}

// const options = document.getElementById('chapters')
// console.log(options.text)
// for (let i = 0; i < options.length; i++) {
//     const option = options[i];
//     if(option.value == '200'){
//         option.setAttribute('selected', true)
//     }
// }