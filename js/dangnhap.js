var password = document.getElementById("password")
var hide = document.getElementById('hide')

hide.onclick = function(){
    showPW()
}

function showPW(){
    if (password.getAttribute("type") === "password"){
        password.setAttribute("type", "text")
    }
    else{
        password.setAttribute("type", "password")
    }
    hide.classList.toggle("fa-eye-slash")
}

function validForm(){
    var name_email = document.getElementById('username-email')
    if((name_email.value === 'ThuNguyen' || name_email.value === 'thu@gmail.com') && password.value==='123456'){
        alert("Bạn đã đăng nhập thành công!")
		window.location = "TrangChu.html"
        return true
    }
    else{
        alert('Tên đăng nhập (email) hoặc mật khẩu của bạn không đúng. Vui lòng kiểm tra lại!')
        return false
    }
}


