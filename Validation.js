const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
var country = document.getElementById("country");
var check = document.getElementById("check");

form.addEventListener('submit', e => {
    validateForm();
    console.log
    (isFormValid());
    if(isFormValid()==true){
        form.submit();
     }else {
         e.preventDefault();
     }

});

function isFormValid(){
    const inputContainer = form.querySelectorAll('.formInput');
    let result = true;
    inputContainer.forEach((container)=>{
        if(container.classList.contains('error')){
            result = false;
        }
    })
    return result;
}


function validateForm(){
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const countrySelect = country.value;

    if(usernameValue === ''){
        setErrorFor(username, 'Name cannot be blank');
    }else if(usernameValue.length < 5){
        setErrorFor (username, "Name must be minimal 5 characters");
    }else{
        setSuccessFor(username);
    }

    if(emailValue === ''){
        setErrorFor(email, 'Email cannot be blank');
    } else if (!isEmail(emailValue)){
        setErrorFor(email, 'Not a Valid Email');
    } else {
        setSuccessFor(email);
    }

    if(phoneValue ===''){
        setErrorFor(phone, 'Phone Number cannot be blank');
    }else if(phoneValue.length < 10){
        setErrorFor(phone, 'Phone number minimal 10 characters')
    }else {
        setSuccessFor(phone);
    }

    if(countrySelect == "select"){
        setErrorFor(country, 'Please select a country');
    }else{
        setSuccessFor(country);
    }

     

    if(!check.checked){
        setErrorFor(check, '');
        return false;
    }else{
        setSuccessFor(check);
    }
}

function setErrorFor(input, message){
    const formInput = input.parentElement;
    const small = formInput.querySelector('small');

    small.innerText = message;

    formInput.className ='formInput error';
}

function setSuccessFor(input){
    const formInput = input.parentElement;
    formInput.className = 'formInput success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}