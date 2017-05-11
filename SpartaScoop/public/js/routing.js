 $('#signin').click(function(e){
                    e.preventDefault();
                    console.log('select_link clicked');
              
                    var data = {};
                    data.email = document.getElementById('email').value;
                    data.pass = document.getElementById('pass').value;
                    
                    $.ajax({
                        type: 'POST',
                        data: JSON.stringify(data),
                        contentType: 'application/json',
                        url: 'http://localhost:3000/v1/users',                      
                        success: function(data) {
                            console.log('success');
                            console.log(JSON.stringify(data));
                        }
                    });
                  
                });             
     










// function login() {

// if (window.XMLHttpRequest) {
//         // code for IE7+, Firefox, Chrome, Opera, Safari
//         xmlhttp = new XMLHttpRequest();
//     } else {
//         // code for IE6, IE5
//         xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
//     }

//     // xmlhttp.open("GET","http://localhost:3000/tasks",true);
//     // xmlhttp.send();
//     // xmlhttp.onreadystatechange = function() {
//     //     if (this.readyState == 4 && this.status == 200) {
//     //         result = xmlhttp.response;
//     //     }
//     // };

//     var email=document.getElementById('email').value;
//     var pass=document.getElementById('pass').value;

//     xmlhttp.open("POST","/v1/users",true);
//     var data = {};
//     data.email = email;
//     data.pass = pass;
//     //var params = email+ ',' + pass;
//     xmlhttp.send(JSON.stringify(data));
//     xmlhttp.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//             result = xmlhttp.response;
//         }
//     };


// }