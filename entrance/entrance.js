let loginBtn=document.querySelector('.login_btn')
let registerBtn=document.querySelector('.register_btn')

if(localStorage.getItem('loggedInUser')){
    window.location.href='../index.html'
}

loginBtn.addEventListener('click',()=>{
    window.location.href='../login/login.html'
})

registerBtn.addEventListener('click',()=>{
    window.location.href='../register/register.html'
})