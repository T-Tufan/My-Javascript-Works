const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const repassword = document.querySelector('#repassword');

function success(input){
    input.className = 'form-control is-valid';
}
function error(input,message){
    input.className = 'form-control is-invalid';
    const err = input.nextElementSibling;
    err.innerText = message;
    err.setAttribute('style','color : red ; font-size : 12px;');
    err.setAttribute('class','invalid-feedback');
}
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
function checkEmail(input){
    if (!validateEmail(input.value)) {
        error(input,'E-mail kurallarına dikkat ediniz.\nÖrneğin; xxx@xxx.com');
    }else{
        success(input);
        console.log("E-mail başarılı");
    }
}
function checkUsername(input,min,max){
    if (input.value.length >max || input.value.length <min ) {
        error(input,`Kullanıcı adı max : ${max} karakter min : ${min } karakter olmalıdır`);
    }else{
        success(input);
        console.log("Username başarılı");
    }
}
function checkPassword(input){
    if (input.value.length <8) {
        error(input,'Parola 8 karakterden düşük olamaz.');
    }else{
        success(input);
        console.log("Password başarılı");
    }
}

function checkRepassword(input){
    if (input.value !== password.value) {
        error(input,'Parolalar aynı değil.')   
    }else{  
        success(input);
    }
}
//Ortak check edilecek alanlar
function checkRequires(inputs){
    for(let [index,input] of inputs.entries()){
        console.log('index : '+index +'input : '+input.id);
        if (input.value === '') {
            error(input,`${input.id} alanı boş bırakılamaz.`)
        } else{
            switch(index){
                case 0 : 
                    checkUsername(input,8,16);
                break;
                case 1 : 
                    checkPassword(input);
                break;
                case 2 : 
                    checkEmail(input);
                break;
                case 3 : 
                    checkRepassword(input);
                break;
                default : 
                break;
            }
        }
    }
}
form.addEventListener('submit',function(e){
    checkRequires([username,password,email,repassword]);
    e.preventDefault();
});

//username kontrol
        /*
    if ( username.value.length < 8) {
        error(input,'Kullanıcı adı 8 karakterden düşük olamaz!!')
    }else{
        success(input) }
    //email kontrol
    if (validateEmail(email.value) === false) {
        error(email,'E-mail kurallarına dikkat ediniz.\nÖrneğin; xxx@xxx.com')   
    }else{
        success(input)    }
    //password kontrol
    if (password.value <8) {
        error(password,'Parola kurallarına dikkat ediniz.')  ; 
    }else{
        success(input)    }
    //repassword kontrol
    if (repassword.value !== password.value) {
        error(repassword,'Parolalar aynı değil.')   
    }else{
        success(input)    }
        */