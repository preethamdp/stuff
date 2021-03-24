const validate = ()=>{
    const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    
    let email = document.getElementById("email");
    let pwd = document.getElementById("password");
    if (reg.test(email.value) == false) 
    {
        alert('Invalid Email Address');
    }
    if(pwd.value.length < 8 || pwd.value.length >16){
        alert("Password should be 8-16 characters long");
    }
    if (!pwd.value.match(/.*[!@#$%^&*]+.*/)){
        alert("Should contain atleast one special character");
    }
    if(!pwd.value.match(/.*[A-Z].*/)){
        alert("password should contain atleast one Capital letter");
    }
    if(!pwd.value.match(/.*[0-9].*/)){
        alert("password should contain atleast one digit");
    }
    if(!pwd.value.match(/.*[a-z].*/)){
        alert("password should contain atleast one small letter");
    }
    return;

}