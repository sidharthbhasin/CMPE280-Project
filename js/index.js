
function valemail(tag, email) {

	var exp = new RegExp('/[A-Za-z0-9!-_$]+@[A-Za-z0-9]+.[A-Za-z]{2,4}/');
	if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
		tag.style = "opacity:0.5;background:#ff7c75;border-style:solid;border-width:1px;border-color:red;";
	}
	else{
		tag.style = "background:#5aa982;border-style:none;";
	}
}

function validate(tag){
	if(tag.value === undefined || tag.value.length == 0){
		tag.style = "opacity:0.5;background:#ff7c75;border-style:solid;border-width:1px;border-color:red;";
		console.log('invalid');
	}
	else{
		tag.style = "background:#5aa982;border-style:none;";
	}
}	

function pp(){
	console.log("aaa");
	var x = document.forms["signin"]["email"].value;
	var y = document.forms["signin"]["password"].value;

	console.log(x);
	console.log(y);
	return false;
}