

function validate(){
  if(document.getElementById("username").value == "" ||
    document.getElementById("psw").value == "" ||
    document.getElementById("psw2").value == "" ||
    document.getElementById("degree").value == "" ||
    document.getElementById("major").value == "") {
    
    	console.log("iinside if validate");
		
	    return true;
  }
  else{
    changeDetails();
    return false;
  }
}

function changeDetails(){
	console.log(document.getElementById("username").value);
	console.log(document.getElementById("psw").value);
	console.log(document.getElementById("psw2").value);
	console.log(document.getElementById("degree").value);
	console.log(document.getElementById("major").value);
}