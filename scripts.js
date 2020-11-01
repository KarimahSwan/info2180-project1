/* Add your JavaScript to this file */
var starter=function(){
    var button=document.getElementsByClassName("btn")[1];
    button.addEventListener("click",function(e){
        var emailaddress= document.getElementById("email").value;
        console.log(emailaddress);
        if (emailaddress==""){
            var deconfirmationmsg="Please enter a valid email address";
            var message=document.getElementsByClassName("message")[0];
            message.textContent=deconfirmationmsg;
        }
        else if (emailaddress!= null){
            var confirmationmsg = "Thank you your email address " +emailaddress+" has been added to our mailing list!";
            var message=document.getElementsByClassName("message")[0];
            message.textContent=confirmationmsg;
        }
        e.preventDefault();
    });  
}
window.onload=starter;