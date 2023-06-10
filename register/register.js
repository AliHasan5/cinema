let regName=document.querySelector('.reg_name')
let regEmail=document.querySelector('.reg_email')
let regPsw=document.querySelector('.reg_psw')
let regReTypePsw=document.querySelector('.reg_reType_psw')
let regErr=document.querySelector('.reg_err')
let loginBtn=document.querySelector('.login_btn')

if(localStorage.getItem('loggedInUser')){
    window.location.href='../index.html'
}

function regSubmit(e){
    // console.log(e);
    e.preventDefault()

    let checkNewUser=users.find(data=>data.email===regEmail.value)
    console.log(checkNewUser);
    if(checkNewUser){
        regErr.innerHTML='Bu istifadeci movcuddur'
    }else{
        if(regReTypePsw.value==regPsw.value){
            let newUser={
                id: users.length+1,
                name: regName.value,
                email: regEmail.value,
                password: regPsw.value
            }
            users.push(newUser)
            regErr.innerHTML='Qeydiyyat ugurla bitdi';
            localStorage.setItem('users',JSON.stringify(users))
        }else{
            regErr.innerHTML='Sifreler eyni deyil'
        }
        
    }
}


loginBtn.addEventListener('click',()=>{
    window.location.href='../login/login.html'
})