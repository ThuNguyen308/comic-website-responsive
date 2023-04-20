var password = document.getElementById("password")
var password2 = document.getElementById("password2")
var hides = document.querySelectorAll('.hide')

hides[0].onclick = function(){showPW(hides[0], password)}
hides[1].onclick = function(){showPW(hides[1], password2)}
function showPW(hide, password){
    if (password.getAttribute("type") === "password"){
        password.setAttribute("type", "text")
    }
    else{
        password.setAttribute("type", "password")
    }
    hide.classList.toggle("fa-eye-slash")
}

const username = document.getElementById('username');
const email = document.getElementById('email');
function validForm(){
	checkUsername()
	checkEmail()
	checkPW()
	checkPW2()
    if( checkUsername()=== false || checkEmail() === false || checkPW() === false || checkPW2() === false){
        return false
    }
    alert('Bạn đã đăng ký thành công!')
    return true
}

    username.addEventListener('focusout', checkUsername)
    email.addEventListener('focusout', checkEmail)
    password.addEventListener('focusout', checkPW)
    password2.addEventListener('focusout', checkPW2)

    function checkUsername(){
        const usernameValue = username.value.trim()
        const usernameErr = document.getElementById('username-err')
        if(usernameValue === '') {
            usernameErr.innerHTML="Thông tin không thể bỏ trống."
            return false
        }
        else{
            usernameErr.innerHTML = ''
            return true
        }
    }
    
    function checkEmail(){
        const emailValue = email.value.trim()
        const emailErr = document.getElementById('email-err')
        if (emailValue ===''){
            emailErr.innerHTML="Thông tin không thể bỏ trống."
            return false
        }
        else if(!emailValue.match(/^[^ ]+\@[^ ]+\.[a-z]{2,3}$/)){
            emailErr.innerHTML = "Định dạng email không đúng. Vui lòng kiểm tra lại."
            return false
        }
        else{
            emailErr.innerHTML = ''
            return true
        }
    }

    function checkPW(){
        var pwValue = password.value.trim()
        var pwErr = document.getElementById('pw-err')
        if(pwValue === ''){
            pwErr.innerHTML="Thông tin không thể bỏ trống."
            return false
        }
        else if (pwValue.length < 6){
            pwErr.innerHTML = "Mật khẩu phải có từ 6 ký tự trở lên."
            return false
        }
        else{
            pwErr.innerHTML = ""
            return true
        }
    }

    function checkPW2(){
        const pw2Value = password2.value
        var pw2Err = document.getElementById('pw2-err')
        if (pw2Value === ''){
            pw2Err.innerHTML="Thông tin không thể bỏ trống."
            return false
        }
        else if (pw2Value != password.value.trim()){
            pw2Err.innerHTML = "Xác nhận mật khẩu không đúng."
            return false
        }
        else{
            pw2Err.innerHTML = ""
            return true
        }
    }