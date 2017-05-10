



function validate(){
  if(document.getElementById("tit").value == "" ||
    document.getElementById("type").value == "" ||
    document.getElementById("desc").value == "" ||
    document.getElementById("loc").value == "" ||
    document.getElementById("contact").value == "" || 
    document.getElementById("email").value == "" ||
    document.getElementById("url").value == "" || 
    document.getElementById("posted").value == "" || 
    document.getElementById("dept").value == "" || 
    document.getElementById("rate").value == "" ) {
    console.log("iinside if validate");

console.log(document.getElementById("tit").value);
console.log(document.getElementById("type").value);
console.log(document.getElementById("desc").value);
console.log(document.getElementById("loc").value);
console.log(document.getElementById("contact").value);
console.log(document.getElementById("email").value);
console.log(document.getElementById("url").value);
console.log(document.getElementById("posted").value);
console.log(document.getElementById("dept").value);
console.log(document.getElementById("rate").value);


    return true;
  }
  else{
    addpost();
    return false;
  }
}


function addpost(){
  var newData = {};

  newData.type = document.getElementById("type").value;
  newData.title = document.getElementById("tit").value;
  newData.description = document.getElementById("desc").value;
  newData.location = document.getElementById("loc").value;
  newData.email = document.getElementById("email").value; 
  newData.url = document.getElementById("url").value;
  newData.dateposted = document.getElementById("posted").value;
  newData.departement = document.getElementById("dept").value;
  newData.payrate = document.getElementById("rate").value;
  newData.postedby = 0;

  var user = {};
  user.username = 0;
  user.user_emailid = 0; 
  user.user_password = 0;
  user.user_profilepicture_url = 0; 
  user.user_degree = 0;
  user.user_major = 0;
  user.__v = 0;

console.log(newData.type);
console.log(newData.title);
console.log(newData.description);
console.log(newData.location);
console.log(newData.email);
console.log(newData.url);
console.log(newData.dateposted);
console.log("dept "+newData.departement);
console.log(newData.payrate);
console.log(newData.postedby);

}




      var post=[
 {
   "_id": "59111ce55d017b13ec7302c3",
   "type": "TA",
   "title": "Teaching Assistant for Sithu Aung CMPE273",
   "description": "Apply only if you have taken the coures",
   "location": "Doodly moore hall ",
   "email": "s.aung@sjsu.edu",
   "url": "www.google.com",
   "dateposted": "07.07.2017",
   "departement": "Computer Science",
   "payrate": "15",
   "postedby": "590f5eb7ec96bf2b5cdd3421",
   "postedbydetails": {
     "_id": "590f5eb7ec96bf2b5cdd3421",
     "username": "kaushikshingne",
     "user_emailid": "kaushik.shingne@sjsu.edu",
     "user_password": "pqr",
     "user_profilepicture_url": "https://avatars3.githubusercontent.com/u/4065884?v=3&u=a0ac43ec7cabf27ed83139f0674e0c9d46e12ea3&s=400",
     "user_degree": "masters",
     "user_major": "IE",
     "__v": 0
   },
   "__v": 0
 },
 {
   "_id": "59111e655d017b13ec7302c5",
   "type": "RA",
   "title": "Research Assistant for Chandra",
   "description": "Apply only if you have taken the coures",
   "location": "Clark Hall",
   "email": "chandravup@sjsu.edu",
   "url": "www.chandra.com",
   "dateposted": "08.07.2017",
   "departement": "SE",
   "payrate": "5",
   "postedby": "590f5eb7ec96bf2b5cdd3421",
   "postedbydetails": {
     "_id": "590f5eb7ec96bf2b5cdd3421",
     "username": "sid",
     "user_emailid": "kaushik.shingne@sjsu.edu",
     "user_password": "pqr",
     "user_profilepicture_url": "https://avatars3.githubusercontent.com/u/4065884?v=3&u=a0ac43ec7cabf27ed83139f0674e0c9d46e12ea3&s=400",
     "user_degree": "masters",
     "user_major": "IE",
     "__v": 0
   },
   "__v": 0
 },
 {
   "_id": "59111edc5d017b13ec7302c7",
   "type": "ISA",
   "title": "Grading assistant for Prof Ranjan",
   "description": "Apply only if you have taken the coures",
   "location": "180",
   "email": "ranjan@sjsu.edu",
   "url": "www.ranjan.com",
   "dateposted": "09.07.2017",
   "departement": "SE",
   "payrate": "5",
   "postedby": "590f5eb7ec96bf2b5cdd3421",
   "postedbydetails": {
     "_id": "590f5eb7ec96bf2b5cdd3421",
     "username": "Amit",
     "user_emailid": "kaushik.shingne@sjsu.edu",
     "user_password": "pqr",
     "user_profilepicture_url": "https://avatars3.githubusercontent.com/u/4065884?v=3&u=a0ac43ec7cabf27ed83139f0674e0c9d46e12ea3&s=400",
     "user_degree": "masters",
     "user_major": "IE",
     "__v": 0
   },
   "__v": 0
 }
]

var i;
for (i=0;i<post.length;i++)
{
 console.log(post[i].type);



       var divInner1=document.createElement("div");
       var divInner2=document.createElement("div");
       var divInner3=document.createElement("div");
       var divInner4=document.createElement("div");
       var divInner5=document.createElement("div");
       var divInner6=document.createElement("div");
       var divInner7=document.createElement("div");
       var divInner8=document.createElement("div");
       var divInner9=document.createElement("div");

       var profileImage=document.createElement("img");

       var userName=document.createElement("p");
       userName.appendChild(document.createTextNode(post[i].postedbydetails.username));
      userName.className += " nameDateFeed";

       var date=document.createElement("p");
       date.className += " nameDateFeed1";
       date.appendChild(document.createTextNode(post[i].dateposted));

       var JobType=document.createElement("p");
       JobType.appendChild(document.createTextNode("Job Type : "+post[i].type));

       var description=document.createElement("p");
       description.appendChild(document.createTextNode("Job Description : "+post[i].description));

       var loc=document.createElement("p");
       loc.appendChild(document.createTextNode("Job Location : "+post[i].location));

       var jobtitle=document.createElement("p");
       jobtitle.appendChild(document.createTextNode("Job Title : "+post[i].title));

        var email=document.createElement("p");
       email.appendChild(document.createTextNode("Contact Email : "+post[i].email));

        var payrate=document.createElement("p");
       payrate.appendChild(document.createTextNode("Payrate : "+post[i].payrate));

       // var JobType=document.createElement("p");





       profileImage.className += " img-responsive";
       profileImage.src=post[i].postedbydetails.user_profilepicture_url;
       divInner3.appendChild(userName);
       divInner3.appendChild(date);
       divInner4.appendChild(divInner3);
       divInner5.appendChild(profileImage);
       divInner5.appendChild(divInner4);
       divInner5.className += " col-md-12";
       divInner5.className += " pp";
       divInner6.appendChild(divInner5);
       divInner6.className += " row";


       divInner1.appendChild(JobType);
       divInner1.appendChild(jobtitle);
       divInner1.appendChild(loc);
       divInner1.appendChild(description);
       divInner1.appendChild(email);
       divInner1.appendChild(payrate);


       divInner1.className += " col-sm-12";
       divInner2.appendChild(divInner1);
       divInner2.className += " row";
       divInner2.className += " feed1";



       divInner7.appendChild(divInner6);
       divInner7.appendChild(divInner2);

       divInner7.className += " col-md-11";
       divInner7.className += " feed";



       //var like=document.createElement("a");
       // var share=document.createElement("a");
       // like.className =+ " btn3";
       // share.className =+ " btn3";

       // divInner8.appendChild(like);
       // divInner8.appendChild(share);
       // divInner8.className += " col-md-12";
       // divInner8.className += " mar20";
       // divInner8.className += " nopad";


       var like=document.createElement('a');
       var linkText = document.createTextNode("LIKE");
       like.appendChild(linkText);
       like.title = "my title text";
       like.href = "http://example.com";
       like.className += " btn3";
       

       var share=document.createElement('a');
       linkText = document.createTextNode("SHARE");
       share.appendChild(linkText);
       share.title = "my title text";
       share.href = "http://example.com";
       share.className += " btn3";
       
  
       divInner8.appendChild(like);
       divInner8.appendChild(share);

       divInner9.appendChild(divInner7);
       divInner9.appendChild(divInner8);

       divInner9.className += " row";
       divInner9.className += " mar30";
       divInner7.style.marginBottom = "14px";

       document.getElementById('postFeedDisplay').insertBefore(divInner9,document.getElementById('postFeedDisplay').firstChild);


}