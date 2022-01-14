let email = document.getElementById("email");
let errorMail = document.getElementById("errorMail");

let pwd = document.getElementById("pwd").value;
let errorPwd = document.getElementById("errorPwd");


function validate()
{
    let regexp = /^([\w\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    
    if(!regexp.test(email.value))
    {
        errorMail.innerText = 'Invalid';
        errorMail.style.color = "green";
        return false;
    }
    else if(pwd=="")
    {
        errorPwd.innerHTML = "**Please fill the password";
        errorPwd.style.color = "red";
        return false;

    }
    else if(pwd.length<8){
        errorPwd.innerHTML = "**Password length must be atleast 8";
        errorPwd.style.color = "red";
        return false;
    }
    
    else if(regexp.test(email.value)){
        errorMail.innerText = "Invalid";
        errorMail.style.color = "red";
        return true;
    }
    else
		{
	    alert('Thank You for Login & You are Redirecting to Kerala Tourism Website');
  
        window.location = "./index.html";
		}

}
function clearFunc()
{
		document.getElementById("email").value="";
		document.getElementById("pwd").value="";
}



// var filter = /^([\w\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;

// function validate()
// {
//     if(email =="")
// 		{
// 			alert("please enter your email id.");
// 		}
// 	else if(pwd=="")
// 		{
//         	alert("enter the password");
// 		}
// 	else if(!filter.test(email))
// 		{
// 			alert("Enter valid email id.");
// 		}
// 	else if(pwd.length < 6 || pwd.length > 6)
// 		{
// 			alert("Password min and max length is 6.");
// 		}
// 	else
// 		{
// 	    alert('Thank You for Login & You are Redirecting to Kerala Tourism Website');
  
//         window.location = "./index.html";
// 		}
// }
	//Reset Inputfield code.
	