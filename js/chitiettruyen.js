
//Read more
var more = document.getElementById('more')

more.addEventListener("click", function(){
    more.parentNode.classList.toggle('active')
    if( more.parentNode.classList.contains('active')){
        more.innerHTML=`<i class="fas fa-angle-left"></i> Thu gọn`
    }
    else{
        more.innerHTML=`Xem thêm <i class="fas fa-angle-right"></i>`
    }
})


//BXH
var topRanks = document.querySelectorAll('.top-ranks > div')
var detailRanks = document.querySelectorAll('.detail-rank')
topRanks.forEach(function(topRank, index) {
    topRank.onclick = function(){
        var topRank_currentactive = document.querySelector('.top-ranks .active')
        topRank_currentactive.classList.remove('active')
        topRank.classList.add('active')

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

//rating star
const stars = document.querySelectorAll('.stars i')
const numRating = document.getElementById('num-rating')
var clicked1 = false
stars.forEach(function(star, index){
    star.onclick = function(){
        stars.forEach(function(ortherstar, indx){
            if(indx >= index){
                ortherstar.classList.add('active')
            }
            else{
                ortherstar.classList.remove('active')
            }
        })
    var newnum = numRating.textContent
    var newnumRating = parseInt(newnum.replace('.', ''))
    if(clicked1 == false){
        newnumRating ++
        newnumRating = newnumRating.toLocaleString().replace(',', '.')
        numRating.innerHTML = `${newnumRating}`
        clicked1 = true
        }
    }
})

const numFollow = document.getElementById('num-follow')
document.getElementById('follow').onclick= function(){
    var newnum1 = numFollow.textContent
    var newnumFollow = parseInt(newnum1.replace('.', ''))
	if(this.classList.contains('unfollow')){
		this.innerHTML= `<i class="fas fa-heart"></i> Theo dõi`
        newnumFollow --
	}
	else{
		this.innerHTML= `<i class="fas fa-heart-broken"></i> Hủy theo dõi`
        newnumFollow ++
	}
    newnumFollow = newnumFollow.toLocaleString().replace(',','.')
    numFollow.innerHTML = `${newnumFollow}`
	this.classList.toggle('unfollow')
}

//change color odd/even
const listItems = document.querySelectorAll('.list-chapter .list-item')
listItems.forEach(function(listItem, index){
    if(index % 2 === 0){
        listItem.classList.add('even')
    }
    else{
        listItem.classList.add('odd')
    }
})




