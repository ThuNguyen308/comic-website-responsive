function check(x){
    if(x.style.backgroundImage === ''){
        x.style.backgroundImage="url('imgs/check.png')"
        x.style.backgroundSize = "100% 100%";
        x.style.backgroundRepeat = "no-repeat";
    }

    else if (x.style.backgroundImage === 'url("imgs/check.png")'){
        x.style.backgroundImage="url('imgs/nocheck.png')"
        x.style.backgroundSize = "100% 100%";
        x.style.backgroundRepeat = "no-repeat";
    }
    else{
        x.style.backgroundImage=""
    }
}

var findBox = document.getElementById('find-box')
var hideBtn = document.getElementById('hide')
var comicBox = document.getElementById('comics')

document.getElementById('find-btn').onclick = function(){
        findBox.classList.toggle('hidden')
        hideBtn.innerHTML='<span>Hiện khung tìm kiếm </span><i class="fas fa-angle-double-down"></i>'
        comicBox.style.display = 'flex'
}

document.getElementById('hide').onclick = function(){
    showFindbox()
}

function showFindbox(){
    if(findBox.classList.contains('hidden')){
        hideBtn.innerHTML='<span>Ẩn khung tìm kiếm </span><i class="fas fa-angle-double-up"></i>';
    }
    else {
        hideBtn.innerHTML='<span>Hiện khung tìm kiếm </span><i class="fas fa-angle-double-down"></i>';
    }
    findBox.classList.toggle('hidden')
}
