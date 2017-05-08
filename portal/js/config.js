window.onload = function(){
        setInterval(function(){ 
            if (navigator.onLine == false) {
                alert('You are not connected to internet');
            } 
        }, 5000);
    }




var holder = document.getElementById('holderSection'),
   innerHolder=document.getElementById('innerHolder'),
   innerHolder1=document.getElementById('innerHolder1'),
   innerHolder2=document.getElementById('innerHolder2'),
   innerHolder3=document.getElementById('innerHolder3'),
   innerHolder4=document.getElementById('innerHolder4'),
   innerObjects=[innerHolder,innerHolder1,innerHolder2,innerHolder3,innerHolder4],
   v=0,
   acceptedTypes = {
      'image/png': true,
      'image/jpeg': true,
      'image/gif': true
    },
    tests = {
      filereader: typeof FileReader != 'undefined',
      dnd: 'draggable' in document.createElement('span'),
      formdata: !!window.FormData,
      progress: "upload" in new XMLHttpRequest
    };


function readfiles(files) {
    var formData = tests.formdata ? new FormData() : null;
    for (var i = 0; i < files.length; i++) {
      if (tests.formdata) formData.append('file', files[i]);
      viewfile(files[i]);
    }
   
}
function viewfile(file) {
 

  if (tests.filereader === true && acceptedTypes[file.type] === true) {
    var reader = new FileReader();
    reader.onload = function (event) {
      var image = new Image();
      image.src = event.target.result;
      image.width = 60; // a fake resize
      innerObjects[v].appendChild(image);
      v=v+1;
    };
    reader.readAsDataURL(file);
    // holder.innerHTML += '<p>Uploaded ' + file.name + ' ' + (file.size ? (file.size/1024|0) + 'K' : '');

  }  else {
    // holder.innerHTML += '<p>Uploaded ' + file.name + ' ' + (file.size ? (file.size/1024|0) + 'K' : '');
    console.log(file);
  }
}

if (tests.dnd) { 
  holder.ondragover = function () { this.className = 'hover'; return false; };
  holder.ondrop = function (e) {
    this.className = '';
    e.preventDefault();
    readfiles(e.dataTransfer.files);
  }
  holder.ondragend = function () { this.className = ''; return false; };
} else {
  fileupload.className = 'hidden';
  fileupload.querySelector('input').onchange = function () {
    readfiles(this.files);
  };
}



//Image upload


function previewFile() {
    // Where you will display your image
    var preview = document.getElementById("uploadImg");
    // The button where the user chooses the local image to display
    var file = document.querySelector('input[type=file]').files[0];
    // FileReader instance
    var reader  = new FileReader();

    // When the image is loaded we will set it as source of
    // our img tag
    reader.onloadend = function () {
      preview.src = reader.result;
    }

    
    if (file) {
      // Load image as a base64 encoded URI
      reader.readAsDataURL(file);
    } else {
      preview.src = "";
    }
  }