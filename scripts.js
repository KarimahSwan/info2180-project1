/* Add your JavaScript to this file */
var starter=function(){
    var button=document.getElementsByClassName("btn")[1];
    button.addEventListener("click",function(e){
        var emailaddress= document.getElementById("email").value;
        console.log(emailaddress);
        if (emailaddress=="" || ValidateEmail(emailaddress)==false){
            var deconfirmationmsg="Please enter a valid email address";
            var message=document.getElementsByClassName("message")[0];
            message.textContent=deconfirmationmsg;
        }
        else if (emailaddress!= null && ValidateEmail(emailaddress)==true){
            var confirmationmsg = "Thank you your email address " +emailaddress+" has been added to our mailing list!";
            var message=document.getElementsByClassName("message")[0];
            message.textContent=confirmationmsg;
        }
        e.preventDefault();
    });  
    function ValidateEmail(emailaddress){
        var mailformat =/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (emailaddress.match(mailformat)){
            return true;
        }
        else{
            return false;
        }
    }
}
window.onload=starter;