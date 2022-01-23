let email = document.getElementById("email");
let errorMail = document.getElementById("errorMail");

let pwd = document.getElementById("pwd").value;
let errorPwd = document.getElementById("errorPwd");


function validate()
{
    let regexp = /^([\w\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/n  
    
    
    if((regexp.test(email.value))||(pwd.length>6))
    {
        errorMail.innerText = 'Valid';
        errorMail.style.color = "green";
        errorPwd.innerHTML = "valid";
        errorPwd.style.color = "green";
        return true;
        
        // if(pwd.trim()=="")
            // {
                // if(pwd.length<5||pwd.length>16){
                // errorPwd.innerHTML = "**Please enter password";
                // errorPwd.style.color = "red";
                // alert("**Please fill the password");
                // }
    }
    else
    {
        errorMail.innerText = 'Inalid';
        errorMail.style.color = "red";
        errorPwd.innerHTML = "**Password length must be atleast 6";
        errorPwd.style.color = "red";
        return false;
    }
        // errorPwd.innerHTML = "valid";
        // errorPwd.style.color = "green";
        
        // return false;
    
    
    
    // else
    // {
    //     errorMail.innerHTML = "Valid";
    //     errorMail.style.color = "green";

    //     errorPwd.innerHTML = "valid";
    //     errorPwd.style.color = "green";
    //     return true;


    // }
    
}
//  function login(){

//     if(pwd==""){
//         errorPwd.innerHTML = "**Please fill the password";
//         errorPwd.style.color = "red";
//         return false;

//     }
//     else if(pwd.length<8){
//         errorPwd.innerHTML = "**Password length must be atleast 8";
//         errorPwd.style.color = "red";
//         return false;
//     }
//     else{
//         errorPwd.innerHTML = "valid";
//         errorPwd.style.color = "green";
//         return true;

//     }

//  }   

    
    
    // else if(regexp.test(email.value)){
    //     errorMail.innerText = "Valid";
    //     errorMail.style.color = "green";
    //     return true;
    // }
    


// function clearFunc()
// {
// 		document.getElementById("email").value="";
// 		document.getElementById("pwd").value="";
// }



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
	