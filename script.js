let email = document.getElementById("email");
let errorMail = document.getElementById("errorMail");

let pwd = document.getElementById("pwd").value;
let errorPwd = document.getElementById("errorPwd");


function validate()
{
    let regexp = /^([\w\.-]+)@([\w\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
    if(pwd=="")
    {
        errorPwd.innerHTML = "**Please fill the password";
        errorPwd.style.color = "red";
        return false;

    }
    // if(pwd.length<8){
    //     errorPwd.innerHTML = "**Password length must be atleast 8";
    //     errorPwd.style.color = "red";
    //     return false;
    //}
    if(regexp.test(email.value))
    {
        errorMail.innerText = 'valid';
        errorMail.style.color = "green";
        return true;
    }
    else{
        errorMail.innerText = "Invalid";
        errorMail.style.color = "red";
        return false;
    }
}

