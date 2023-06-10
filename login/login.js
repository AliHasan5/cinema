let logEmail=document.querySelector('.log_email')
let logPsw=document.querySelector('.log_psw')
let logErr=document.querySelector('.log_err')
let registerBtn=document.querySelector('.register_btn');



if(localStorage.getItem('loggedInUser')){
    window.location.href='../index.html'
}


function logSubmit(e){
    e.preventDefault()

    let checkUser=users.find(data=>data.email===logEmail.value);
    
    if(checkUser){
        if(checkUser.password==logPsw.value){
            console.log(checkUser);
            localStorage.setItem('loggedInUser',JSON.stringify(checkUser))
            window.location.href='../index.html'
        }else{
            logErr.innerHTML='Sifre yanlisdir'
        }
    }else{
        logErr.innerHTML='Bu istifadeci movcud deyil'
    }
}


registerBtn.addEventListener('click',()=>{
    window.location.href='../register/register.html'
})