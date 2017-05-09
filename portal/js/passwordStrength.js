window.onload = function(){
        setInterval(function(){ 
            if (navigator.onLine == false) {
                alert('You are not connected to internet');
            } 
        }, 5000);
    }


 // Begining of display of hidden password explain and check field
var passwordCheck=document.getElementById("passwordStrength");
// var passwordExplain=document.getElementById("passwordDetails");
// var span= document.getElementsByClassName("close")[0];

function checkPassword() {
    passwordCheck.style.display = "block";
    // passwordExplain.style.display = "block";
    var counter=0;


	//start check mark display as per password correction

	var check=document.getElementsByClassName("checkmark");
	var passwordValue=document.getElementById("password").value;
	var userid=document.getElementById("userid").value;
      
		      if(passwordValue.length >= 8) {
		        check[3].style.display="block";
		        check[5].style.display="block";
		        check[4].style.display="none";
		        counter++;
		      }
		      if(passwordValue != userid) {
		        check[6].style.display="block";
		        check[5].style.display="block";
		        check[4].style.display="none";
		        counter++;
		      }
		      else
		      {
		        check[6].style.display="none";
		        counter--;
		        document.getElementById("checkmark1").style.display="none";
		      }
		      
		      re = /[0-9]/;
		      if(re.test(passwordValue)) {
		        check[2].style.display="block";
		        check[5].style.display="block";
		        check[4].style.display="none";
		        counter++;
		      }
		      re = /[a-z]/;
		      if(re.test(passwordValue)) {
		        check[1].style.display="block";
		        check[5].style.display="block";
		        check[4].style.display="none";
		        counter++;
		      }
		      re = /[A-Z]/;
		      if(re.test(passwordValue)) {
		        check[0].style.display="block";
		        check[5].style.display="block";
		        check[4].style.display="none";
		        counter++;
		      }
		      re = /[!$%^&*()+|~=`{}<>?,#]/;
		      if(re.test(passwordValue)) {
		        check[4].style.display="block";
		        check[5].style.display="none";
		        counter--;
		      }
		      if(counter==1 || counter==2 || counter== 3)
		      {
		      	var obj=document.getElementById("showingPasswordStrngth");
		      	obj.style.display="block";
		      	obj.style.backgroundColor = "red";
		      	obj.innerHTML="WEAK";

		      }
		      if(counter== 4)
		      {
		      	var obj=document.getElementById("showingPasswordStrngth");
		      	obj.style.display="block";
		      	obj.style.backgroundColor = "YELLOW";
		      	obj.innerHTML="MODERATE";

		      }
		      if(counter==5)
		      {
		      	var obj=document.getElementById("showingPasswordStrngth");
		      	obj.style.display="block";
		      	obj.style.backgroundColor = "GREEN";
		      	obj.innerHTML="STRONG";
		      	setTimeout(hidePassword, 1000)

		      }

		      function hidePassword()
		      {

		      	 passwordCheck.style.display = "none";
    			 passwordExplain.style.display = "none";
    			 document.getElementById("checkmark1").style.display="block";

		      }

		      //if password is changed after puttind some value

		      if(passwordValue.length < 8) {
		        check[3].style.display="none";
		        counter--;
		        document.getElementById("checkmark1").style.display="none";
		      }
		     
		      re = /[0-9]/;
		      if(!re.test(passwordValue)) {
		        check[2].style.display="none";
		        document.getElementById("checkmark1").style.display="none";
		        counter--;
		      }
		      re = /[a-z]/;
		      if(!re.test(passwordValue)) {
		        check[1].style.display="none";
		        document.getElementById("checkmark1").style.display="none";
		        counter--;
		      }
		      re = /[A-Z]/;
		      if(!re.test(passwordValue)) {
		        check[0].style.display="none";
		        document.getElementById("checkmark1").style.display="none";
		        counter--;
		      }

		      if(!counter==5 && counter!=-5)
		      {
		      	 passwordCheck.style.display = "block";
    			 passwordExplain.style.display = "block";
		      }
		      if(counter==-5 || counter==-4)
		      {
		      	 passwordCheck.style.display = "none";
    			 passwordExplain.style.display = "none";
    			 document.getElementById("showingPasswordStrngth").style.display="none";
		      }

             

	//end of check mark

}

function Verify(){
        var passwordValue=document.getElementById("password").value;
        var Verified=document.getElementById("Verified");
        var NotVerified=document.getElementById("NotVerified");
		var passwordVerify=document.getElementById("passwordVerify").value;

        if(passwordValue!="")
        {
			if(passwordValue!=passwordVerify){
				NotVerified.style.display="block";
				Verified.style.display="none";
			}
			if(passwordValue==passwordVerify){
				NotVerified.style.display="none";
				Verified.style.display="block";

			}
			if(passwordVerify==""){
				NotVerified.style.display="none";
				Verified.style.display="none";
			}
	    }
	    else
	    {
	    	if(passwordVerify==""){
				NotVerified.style.display="none";
				Verified.style.display="none";
			}
	    	alert("Please fill password field first");
	    }

}



//end of display


function Register()
{

	return true;
}

