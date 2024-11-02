function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6BOjqkyP8AK":
        Script1();
        break;
      case "5UhYuVR0LHz":
        Script2();
        break;
      case "5qZkfd3LRDZ":
        Script3();
        break;
      case "5vOPxPMm8B8":
        Script4();
        break;
      case "6Ae6KFDqwaj":
        Script5();
        break;
      case "6lR6T9YjJ3t":
        Script6();
        break;
      case "5vY6QUV9ttv":
        Script7();
        break;
      case "6YCZP9O6rUu":
        Script8();
        break;
      case "5vdMA4yiu06":
        Script9();
        break;
      case "6jURHoqKXNt":
        Script10();
        break;
      case "6Qa1PSEH6il":
        Script11();
        break;
      case "6S5YeB1uN4f":
        Script12();
        break;
      case "5qIr8IG3fEh":
        Script13();
        break;
      case "67pbfMMEAFR":
        Script14();
        break;
      case "5ypNkDX03uG":
        Script15();
        break;
      case "6lhvHntzUMY":
        Script16();
        break;
      case "5Y7TIWkCzXR":
        Script17();
        break;
      case "5adFsepsmYC":
        Script18();
        break;
      case "5YzJ5acbTmb":
        Script19();
        break;
      case "6EgrbleubiM":
        Script20();
        break;
      case "5hLNjdnxrHX":
        Script21();
        break;
      case "5vAd7PosrjN":
        Script22();
        break;
      case "5qWQxeDECJs":
        Script23();
        break;
      case "5eeFvOrHPiM":
        Script24();
        break;
      case "6in8sYrP2Mn":
        Script25();
        break;
      case "5WKf4qENqBZ":
        Script26();
        break;
      case "5nyLo3Ge5cO":
        Script27();
        break;
      case "5jaJkOJfOwM":
        Script28();
        break;
      case "6Tz27QcZZbS":
        Script29();
        break;
      case "5oCY4SaBlj2":
        Script30();
        break;
      case "6cin52HxqkS":
        Script31();
        break;
      case "6qejmSCNu5L":
        Script32();
        break;
      case "6HlUUqNqtYD":
        Script33();
        break;
      case "6WPIe8h8sot":
        Script34();
        break;
      case "5qnRb68Gn6c":
        Script35();
        break;
      case "64yprThVWTU":
        Script36();
        break;
      case "6OLakrHqwI7":
        Script37();
        break;
      case "5fmG3L95rbn":
        Script38();
        break;
      case "6YGEthSrtFD":
        Script39();
        break;
      case "6qhvJv1w4CH":
        Script40();
        break;
      case "6bLA0YIHLZG":
        Script41();
        break;
      case "5kIO2J311C0":
        Script42();
        break;
      case "5oNn9n4qNeG":
        Script43();
        break;
      case "6epxqbelrT2":
        Script44();
        break;
      case "65kW1uoUnuo":
        Script45();
        break;
      case "6QayEXXBwkC":
        Script46();
        break;
      case "6PYE6ovRFux":
        Script47();
        break;
      case "5nJmdT1iZE3":
        Script48();
        break;
      case "6jXaeWmR2Th":
        Script49();
        break;
      case "6U2LHh76QCE":
        Script50();
        break;
      case "6Op5K91EpDa":
        Script51();
        break;
      case "6NG3rjpeK5d":
        Script52();
        break;
      case "6aYzePzVShc":
        Script53();
        break;
      case "6LQZXIbehJt":
        Script54();
        break;
      case "6Vcs3z6p2M4":
        Script55();
        break;
      case "6HE3hg4bmHq":
        Script56();
        break;
      case "6fhime8VLHl":
        Script57();
        break;
      case "6ffLI5kWc1A":
        Script58();
        break;
      case "6jBIktyuYBK":
        Script59();
        break;
      case "648tZ8neHQc":
        Script60();
        break;
      case "5ZvK7ld0Noh":
        Script61();
        break;
      case "6bROxyNL6yt":
        Script62();
        break;
      case "6k1Ez6f5RaX":
        Script63();
        break;
      case "5jQwV4bdc8b":
        Script64();
        break;
      case "6UCWDjWwCGR":
        Script65();
        break;
      case "5p6DfMW1mpB":
        Script66();
        break;
  }
}

function Script1()
{
  chnage_Position();
set_Optcity();
hide_Control();
add_Margin();

//Chnage Position	
function chnage_Position()
{	
var modernVideoControls = document.getElementsByClassName("modern-video-controls");
var videoSeekbar = document.getElementsByClassName("video-seekbar");
var videoSeekbarHitarea = document.getElementsByClassName("video-seekbar-hitarea");

for (var i = 0; i < modernVideoControls.length; i++) {
    modernVideoControls[i].style.position = "none";
}

for (var i = 0; i < videoSeekbar.length; i++) {
    videoSeekbar[i].style.position = "none";
}

for (var i = 0; i < videoSeekbarHitarea.length; i++) {
    videoSeekbarHitarea[i].style.position = "none";
}
}

// Set Opicity 
function set_Optcity()
{
var modernVideoControls = document.getElementsByClassName("modern-video-controls");
var videoAnimationContainer = document.getElementsByClassName("video-animation-container");
var controlBackground = document.getElementsByClassName("control-background");

for (var i = 0; i < modernVideoControls.length; i++) {
    modernVideoControls[i].style.backgroundColor = "rgba(0, 0, 0, 0)";
}

for (var i = 0; i < videoAnimationContainer.length; i++) {
    videoAnimationContainer[i].style.backgroundColor = "rgba(0, 0, 0, 0)";
}

for (var i = 0; i < controlBackground.length; i++) {
    controlBackground[i].style.backgroundColor = "rgba(0, 0, 0, 0)";
}
}	

//Hide COntrol
function hide_Control()
{

	var classes = ["video-controlbar", "seek-enabled", "elapsed-time-enabled", "volume-enabled", "playback-speed-enabled", "pip-enabled", "full-screen-enabled"];
  
  classes.forEach(function(className) {
    var x = document.querySelectorAll("." + className);
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
  });
	
}

 //Add Margin
 function add_Margin()
 {
var modernVideoControls = document.getElementsByClassName("modern-video-controls");
var videoSeekbar = document.getElementsByClassName("video-seekbar");

for (var i = 0; i < modernVideoControls.length; i++) {
    modernVideoControls[i].style.marginTop = "38px";
}

for (var i = 0; i < videoSeekbar.length; i++) {
    videoSeekbar[i].style.marginTop = "38px";
}

 }
}

function Script2()
{
  var player = GetPlayer();

player.SetVar("SwipeDown", false);
player.SetVar("SwipeUp", false);

var playing = player.GetVar("Isplaying");

if (playing === false){

player.SetVar("isplaying", true);

}

player.setVar("DoubleTap", false);



}

function Script3()
{
  // variable to store the timestamp of the first tap
var firstTapTime;

// variable to store the element that was tapped
var tappedElement;

// add a touchstart event listener to the document
document.addEventListener("touchstart", function(event) {
    // store the timestamp of the first tap
    firstTapTime = new Date().getTime();
    // store the element that was tapped
    tappedElement = event.target;
});

// add a touchend event listener to the document
document.addEventListener("touchend", function(event) {
    // check if the second tap occurred within 60 milliseconds of the first tap
    if (new Date().getTime() - firstTapTime < 60) {
        // double tap detected
        console.log("Double tap detected!");
        var player = GetPlayer();
        player.SetVar("DoubleTap",true);
        
    }
});

  
    
    
 


}

function Script4()
{
  localStorage.setItem("SwipeUp", "false");
localStorage.setItem("SwipeDown", "false");
var player = GetPlayer();

var initialY;

document.addEventListener('touchstart', function(event) {
    initialY = event.touches[0].clientY;
}, false);

document.addEventListener('touchend', function(event) {
    var finalY = event.changedTouches[0].clientY;
    if (initialY > finalY) {
        console.log("Swipe Up");
        player.SetVar("SwipeUp",true);
       
       
    } else if (initialY < finalY) {
        console.log("Swipe Down");
        player.SetVar("SwipeDown",true);
        
    }
}, false);





   
    

}

function Script5()
{
  function copyToClipboard(text) {
  var textArea = document.createElement("textarea");
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
}

var player = GetPlayer();
var text = player.GetVar("VideoLink");
copyToClipboard(text);

}

function Script6()
{
  var player = GetPlayer();
var videoLink = player.GetVar("VideoLink");
window.open(`https://www.facebook.com/sharer/sharer.php?u=${videoLink}`, "_blank");
}

function Script7()
{
  var player = GetPlayer();
var videoLink = player.GetVar("VideoLink");
window.open(`https://www.instagram.com/sharer/sharer.php?u=${videoLink}`, "_blank");
}

function Script8()
{
  var player = GetPlayer();
var videoUrl = player.GetVar("VideoLink");
var link = "mailto:?subject=" + encodeURIComponent("Check out this video") + "&body=" + encodeURIComponent(videoUrl);
    window.location.href = link;
    
}

function Script9()
{
  var player = GetPlayer();
var videoLink = player.GetVar("VideoLink");
window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${videoLink}`, "_blank");
}

function Script10()
{
  var player = GetPlayer();
var videoLink = player.GetVar("VideoLink");
window.open(`https://twitter.com/share?url=${videoLink}`, "_blank");
}

function Script11()
{
  var player = GetPlayer();
var link = player.GetVar("VideoLink");
    var message = "Check out this Video: " + link;
    var whatsapp_url = "https://api.whatsapp.com/send?text=" + encodeURIComponent(message);
    window.open(whatsapp_url, '_blank');
}

function Script12()
{
  chnage_Position();
set_Optcity();
hide_Control();
add_Margin();

//Chnage Position	
function chnage_Position()
{	
var modernVideoControls = document.getElementsByClassName("modern-video-controls");
var videoSeekbar = document.getElementsByClassName("video-seekbar");
var videoSeekbarHitarea = document.getElementsByClassName("video-seekbar-hitarea");

for (var i = 0; i < modernVideoControls.length; i++) {
    modernVideoControls[i].style.position = "none";
}

for (var i = 0; i < videoSeekbar.length; i++) {
    videoSeekbar[i].style.position = "none";
}

for (var i = 0; i < videoSeekbarHitarea.length; i++) {
    videoSeekbarHitarea[i].style.position = "none";
}
}

// Set Opicity 
function set_Optcity()
{
var modernVideoControls = document.getElementsByClassName("modern-video-controls");
var videoAnimationContainer = document.getElementsByClassName("video-animation-container");
var controlBackground = document.getElementsByClassName("control-background");

for (var i = 0; i < modernVideoControls.length; i++) {
    modernVideoControls[i].style.backgroundColor = "rgba(0, 0, 0, 0)";
}

for (var i = 0; i < videoAnimationContainer.length; i++) {
    videoAnimationContainer[i].style.backgroundColor = "rgba(0, 0, 0, 0)";
}

for (var i = 0; i < controlBackground.length; i++) {
    controlBackground[i].style.backgroundColor = "rgba(0, 0, 0, 0)";
}
}	

//Hide COntrol
function hide_Control()
{

	var classes = ["video-controlbar", "seek-enabled", "elapsed-time-enabled", "volume-enabled", "playback-speed-enabled", "pip-enabled", "full-screen-enabled"];
  
  classes.forEach(function(className) {
    var x = document.querySelectorAll("." + className);
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
  });
	
}

 //Add Margin
 function add_Margin()
 {
var modernVideoControls = document.getElementsByClassName("modern-video-controls");
var videoSeekbar = document.getElementsByClassName("video-seekbar");

for (var i = 0; i < modernVideoControls.length; i++) {
    modernVideoControls[i].style.marginTop = "38px";
}

for (var i = 0; i < videoSeekbar.length; i++) {
    videoSeekbar[i].style.marginTop = "38px";
}

 }
}

function Script13()
{
  var player = GetPlayer();

player.SetVar("SwipeDown", false);
player.SetVar("SwipeUp", false);

var playing = player.GetVar("Isplaying");

if (playing === false){

player.SetVar("isplaying", true);

}

player.setVar("DoubleTap", false);

}

function Script14()
{
  // variable to store the timestamp of the first tap
var firstTapTime;

// variable to store the element that was tapped
var tappedElement;

// add a touchstart event listener to the document
document.addEventListener("touchstart", function(event) {
    // store the timestamp of the first tap
    firstTapTime = new Date().getTime();
    // store the element that was tapped
    tappedElement = event.target;
});

// add a touchend event listener to the document
document.addEventListener("touchend", function(event) {
    // check if the second tap occurred within 60 milliseconds of the first tap
    if (new Date().getTime() - firstTapTime < 60) {
        // double tap detected
        console.log("Double tap detected!");
        var player = GetPlayer();
        player.SetVar("DoubleTap",true);
        
    }
});

  
    
    
 


}

function Script15()
{
  localStorage.setItem("SwipeUp", "false");
localStorage.setItem("SwipeDown", "false");
var player = GetPlayer();

var initialY;

document.addEventListener('touchstart', function(event) {
    initialY = event.touches[0].clientY;
}, false);

document.addEventListener('touchend', function(event) {
    var finalY = event.changedTouches[0].clientY;
    if (initialY > finalY) {
        console.log("Swipe Up");
        player.SetVar("SwipeUp",true);
        
       
    } else if (initialY < finalY) {
        console.log("Swipe Down");
        player.SetVar("SwipeDown",true);
        
    }
}, false);
}

function Script16()
{
  function copyToClipboard(text) {
  var textArea = document.createElement("textarea");
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
}

var player = GetPlayer();
var text = player.GetVar("VideoLink");
copyToClipboard(text);

}

function Script17()
{
  var player = GetPlayer();
var videoLink = player.GetVar("VideoLink");
window.open(`https://www.facebook.com/sharer/sharer.php?u=${videoLink}`, "_blank");
}

function Script18()
{
  var player = GetPlayer();
var videoLink = player.GetVar("VideoLink");
window.open(`https://www.instagram.com/sharer/sharer.php?u=${videoLink}`, "_blank");
}

function Script19()
{
  var player = GetPlayer();
var videoUrl = player.GetVar("VideoLink");
var link = "mailto:?subject=" + encodeURIComponent("Check out this video") + "&body=" + encodeURIComponent(videoUrl);
    window.location.href = link;
    
}

function Script20()
{
  var player = GetPlayer();
var videoLink = player.GetVar("VideoLink");
window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${videoLink}`, "_blank");
}

function Script21()
{
  var player = GetPlayer();
var videoLink = player.GetVar("VideoLink");
window.open(`https://twitter.com/share?url=${videoLink}`, "_blank");
}

function Script22()
{
  var player = GetPlayer();
var link = player.GetVar("VideoLink");
    var message = "Check out this Video: " + link;
    var whatsapp_url = "https://api.whatsapp.com/send?text=" + encodeURIComponent(message);
    window.open(whatsapp_url, '_blank');
}

function Script23()
{
  chnage_Position();
set_Optcity();
hide_Control();
add_Margin();

//Chnage Position	
function chnage_Position()
{	
var modernVideoControls = document.getElementsByClassName("modern-video-controls");
var videoSeekbar = document.getElementsByClassName("video-seekbar");
var videoSeekbarHitarea = document.getElementsByClassName("video-seekbar-hitarea");

for (var i = 0; i < modernVideoControls.length; i++) {
    modernVideoControls[i].style.position = "none";
}

for (var i = 0; i < videoSeekbar.length; i++) {
    videoSeekbar[i].style.position = "none";
}

for (var i = 0; i < videoSeekbarHitarea.length; i++) {
    videoSeekbarHitarea[i].style.position = "none";
}
}

// Set Opicity 
function set_Optcity()
{
var modernVideoControls = document.getElementsByClassName("modern-video-controls");
var videoAnimationContainer = document.getElementsByClassName("video-animation-container");
var controlBackground = document.getElementsByClassName("control-background");

for (var i = 0; i < modernVideoControls.length; i++) {
    modernVideoControls[i].style.backgroundColor = "rgba(0, 0, 0, 0)";
}

for (var i = 0; i < videoAnimationContainer.length; i++) {
    videoAnimationContainer[i].style.backgroundColor = "rgba(0, 0, 0, 0)";
}

for (var i = 0; i < controlBackground.length; i++) {
    controlBackground[i].style.backgroundColor = "rgba(0, 0, 0, 0)";
}
}	

//Hide COntrol
function hide_Control()
{

	var classes = ["video-controlbar", "seek-enabled", "elapsed-time-enabled", "volume-enabled", "playback-speed-enabled", "pip-enabled", "full-screen-enabled"];
  
  classes.forEach(function(className) {
    var x = document.querySelectorAll("." + className);
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
  });
	
}

 //Add Margin
 function add_Margin()
 {
var modernVideoControls = document.getElementsByClassName("modern-video-controls");
var videoSeekbar = document.getElementsByClassName("video-seekbar");

for (var i = 0; i < modernVideoControls.length; i++) {
    modernVideoControls[i].style.marginTop = "38px";
}

for (var i = 0; i < videoSeekbar.length; i++) {
    videoSeekbar[i].style.marginTop = "38px";
}

 }
}

function Script24()
{
  var player = GetPlayer();

player.SetVar("SwipeDown", false);
player.SetVar("SwipeUp", false);

var playing = player.GetVar("Isplaying");

if (playing === false){

player.SetVar("isplaying", true);

}

player.setVar("DoubleTap", false);

}

function Script25()
{
  // variable to store the timestamp of the first tap
var firstTapTime;

// variable to store the element that was tapped
var tappedElement;

// add a touchstart event listener to the document
document.addEventListener("touchstart", function(event) {
    // store the timestamp of the first tap
    firstTapTime = new Date().getTime();
    // store the element that was tapped
    tappedElement = event.target;
});

// add a touchend event listener to the document
document.addEventListener("touchend", function(event) {
    // check if the second tap occurred within 60 milliseconds of the first tap
    if (new Date().getTime() - firstTapTime < 60) {
        // double tap detected
        console.log("Double tap detected!");
        var player = GetPlayer();
        player.SetVar("DoubleTap",true);
        
    }
});

  
    
    
 


}

function Script26()
{
  localStorage.setItem("SwipeUp", "false");
localStorage.setItem("SwipeDown", "false");
var player = GetPlayer();

var initialY;

document.addEventListener('touchstart', function(event) {
    initialY = event.touches[0].clientY;
}, false);

document.addEventListener('touchend', function(event) {
    var finalY = event.changedTouches[0].clientY;
    if (initialY > finalY) {
        console.log("Swipe Up");
        player.SetVar("SwipeUp",true);
        
       
    } else if (initialY < finalY) {
        console.log("Swipe Down");
        player.SetVar("SwipeDown",true);
        
    }
}, false);
}

function Script27()
{
  function copyToClipboard(text) {
  var textArea = document.createElement("textarea");
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
}

var player = GetPlayer();
var text = player.GetVar("VideoLink");
copyToClipboard(text);

}

function Script28()
{
  var player = GetPlayer();
var videoLink = player.GetVar("VideoLink");
window.open(`https://www.facebook.com/sharer/sharer.php?u=${videoLink}`, "_blank");
}

function Script29()
{
  var player = GetPlayer();
var videoLink = player.GetVar("VideoLink");
window.open(`https://www.instagram.com/sharer/sharer.php?u=${videoLink}`, "_blank");
}

function Script30()
{
  var player = GetPlayer();
var videoUrl = player.GetVar("VideoLink");
var link = "mailto:?subject=" + encodeURIComponent("Check out this video") + "&body=" + encodeURIComponent(videoUrl);
    window.location.href = link;
    
}

function Script31()
{
  var player = GetPlayer();
var videoLink = player.GetVar("VideoLink");
window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${videoLink}`, "_blank");
}

function Script32()
{
  var player = GetPlayer();
var videoLink = player.GetVar("VideoLink");
window.open(`https://twitter.com/share?url=${videoLink}`, "_blank");
}

function Script33()
{
  var player = GetPlayer();
var link = player.GetVar("VideoLink");
    var message = "Check out this Video: " + link;
    var whatsapp_url = "https://api.whatsapp.com/send?text=" + encodeURIComponent(message);
    window.open(whatsapp_url, '_blank');
}

function Script34()
{
  chnage_Position();
set_Optcity();
hide_Control();
add_Margin();

//Chnage Position	
function chnage_Position()
{	
var modernVideoControls = document.getElementsByClassName("modern-video-controls");
var videoSeekbar = document.getElementsByClassName("video-seekbar");
var videoSeekbarHitarea = document.getElementsByClassName("video-seekbar-hitarea");

for (var i = 0; i < modernVideoControls.length; i++) {
    modernVideoControls[i].style.position = "none";
}

for (var i = 0; i < videoSeekbar.length; i++) {
    videoSeekbar[i].style.position = "none";
}

for (var i = 0; i < videoSeekbarHitarea.length; i++) {
    videoSeekbarHitarea[i].style.position = "none";
}
}

// Set Opicity 
function set_Optcity()
{
var modernVideoControls = document.getElementsByClassName("modern-video-controls");
var videoAnimationContainer = document.getElementsByClassName("video-animation-container");
var controlBackground = document.getElementsByClassName("control-background");

for (var i = 0; i < modernVideoControls.length; i++) {
    modernVideoControls[i].style.backgroundColor = "rgba(0, 0, 0, 0)";
}

for (var i = 0; i < videoAnimationContainer.length; i++) {
    videoAnimationContainer[i].style.backgroundColor = "rgba(0, 0, 0, 0)";
}

for (var i = 0; i < controlBackground.length; i++) {
    controlBackground[i].style.backgroundColor = "rgba(0, 0, 0, 0)";
}
}	

//Hide COntrol
function hide_Control()
{

	var classes = ["video-controlbar", "seek-enabled", "elapsed-time-enabled", "volume-enabled", "playback-speed-enabled", "pip-enabled", "full-screen-enabled"];
  
  classes.forEach(function(className) {
    var x = document.querySelectorAll("." + className);
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
  });
	
}

 //Add Margin
 function add_Margin()
 {
var modernVideoControls = document.getElementsByClassName("modern-video-controls");
var videoSeekbar = document.getElementsByClassName("video-seekbar");

for (var i = 0; i < modernVideoControls.length; i++) {
    modernVideoControls[i].style.marginTop = "38px";
}

for (var i = 0; i < videoSeekbar.length; i++) {
    videoSeekbar[i].style.marginTop = "38px";
}

 }
}

function Script35()
{
  var player = GetPlayer();

player.SetVar("SwipeDown", false);
player.SetVar("SwipeUp", false);

var playing = player.GetVar("Isplaying");

if (playing === false){

player.SetVar("isplaying", true);

}

player.setVar("DoubleTap", false);

}

function Script36()
{
  // variable to store the timestamp of the first tap
var firstTapTime;

// variable to store the element that was tapped
var tappedElement;

// add a touchstart event listener to the document
document.addEventListener("touchstart", function(event) {
    // store the timestamp of the first tap
    firstTapTime = new Date().getTime();
    // store the element that was tapped
    tappedElement = event.target;
});

// add a touchend event listener to the document
document.addEventListener("touchend", function(event) {
    // check if the second tap occurred within 60 milliseconds of the first tap
    if (new Date().getTime() - firstTapTime < 60) {
        // double tap detected
        console.log("Double tap detected!");
        var player = GetPlayer();
        player.SetVar("DoubleTap",true);
        
    }
});

  
    
    
 


}

function Script37()
{
  localStorage.setItem("SwipeUp", "false");
localStorage.setItem("SwipeDown", "false");
var player = GetPlayer();

var initialY;

document.addEventListener('touchstart', function(event) {
    initialY = event.touches[0].clientY;
}, false);

document.addEventListener('touchend', function(event) {
    var finalY = event.changedTouches[0].clientY;
    if (initialY > finalY) {
        console.log("Swipe Up");
        player.SetVar("SwipeUp",true);
        
       
    } else if (initialY < finalY) {
        console.log("Swipe Down");
        player.SetVar("SwipeDown",true);
        
    }
}, false);
}

function Script38()
{
  function copyToClipboard(text) {
  var textArea = document.createElement("textarea");
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
}

var player = GetPlayer();
var text = player.GetVar("VideoLink");
copyToClipboard(text);

}

function Script39()
{
  var player = GetPlayer();
var videoLink = player.GetVar("VideoLink");
window.open(`https://www.facebook.com/sharer/sharer.php?u=${videoLink}`, "_blank");
}

function Script40()
{
  var player = GetPlayer();
var videoLink = player.GetVar("VideoLink");
window.open(`https://www.instagram.com/sharer/sharer.php?u=${videoLink}`, "_blank");
}

function Script41()
{
  var player = GetPlayer();
var videoUrl = player.GetVar("VideoLink");
var link = "mailto:?subject=" + encodeURIComponent("Check out this video") + "&body=" + encodeURIComponent(videoUrl);
    window.location.href = link;
    
}

function Script42()
{
  var player = GetPlayer();
var videoLink = player.GetVar("VideoLink");
window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${videoLink}`, "_blank");
}

function Script43()
{
  var player = GetPlayer();
var videoLink = player.GetVar("VideoLink");
window.open(`https://twitter.com/share?url=${videoLink}`, "_blank");
}

function Script44()
{
  var player = GetPlayer();
var link = player.GetVar("VideoLink");
    var message = "Check out this Video: " + link;
    var whatsapp_url = "https://api.whatsapp.com/send?text=" + encodeURIComponent(message);
    window.open(whatsapp_url, '_blank');
}

function Script45()
{
  chnage_Position();
set_Optcity();
hide_Control();
add_Margin();

//Chnage Position	
function chnage_Position()
{	
var modernVideoControls = document.getElementsByClassName("modern-video-controls");
var videoSeekbar = document.getElementsByClassName("video-seekbar");
var videoSeekbarHitarea = document.getElementsByClassName("video-seekbar-hitarea");

for (var i = 0; i < modernVideoControls.length; i++) {
    modernVideoControls[i].style.position = "none";
}

for (var i = 0; i < videoSeekbar.length; i++) {
    videoSeekbar[i].style.position = "none";
}

for (var i = 0; i < videoSeekbarHitarea.length; i++) {
    videoSeekbarHitarea[i].style.position = "none";
}
}

// Set Opicity 
function set_Optcity()
{
var modernVideoControls = document.getElementsByClassName("modern-video-controls");
var videoAnimationContainer = document.getElementsByClassName("video-animation-container");
var controlBackground = document.getElementsByClassName("control-background");

for (var i = 0; i < modernVideoControls.length; i++) {
    modernVideoControls[i].style.backgroundColor = "rgba(0, 0, 0, 0)";
}

for (var i = 0; i < videoAnimationContainer.length; i++) {
    videoAnimationContainer[i].style.backgroundColor = "rgba(0, 0, 0, 0)";
}

for (var i = 0; i < controlBackground.length; i++) {
    controlBackground[i].style.backgroundColor = "rgba(0, 0, 0, 0)";
}
}	

//Hide COntrol
function hide_Control()
{

	var classes = ["video-controlbar", "seek-enabled", "elapsed-time-enabled", "volume-enabled", "playback-speed-enabled", "pip-enabled", "full-screen-enabled"];
  
  classes.forEach(function(className) {
    var x = document.querySelectorAll("." + className);
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
  });
	
}

 //Add Margin
 function add_Margin()
 {
var modernVideoControls = document.getElementsByClassName("modern-video-controls");
var videoSeekbar = document.getElementsByClassName("video-seekbar");

for (var i = 0; i < modernVideoControls.length; i++) {
    modernVideoControls[i].style.marginTop = "38px";
}

for (var i = 0; i < videoSeekbar.length; i++) {
    videoSeekbar[i].style.marginTop = "38px";
}

 }
}

function Script46()
{
  var player = GetPlayer();

player.SetVar("SwipeDown", false);
player.SetVar("SwipeUp", false);

var playing = player.GetVar("Isplaying");

if (playing === false){

player.SetVar("isplaying", true);

}

player.setVar("DoubleTap", false);

}

function Script47()
{
  // variable to store the timestamp of the first tap
var firstTapTime;

// variable to store the element that was tapped
var tappedElement;

// add a touchstart event listener to the document
document.addEventListener("touchstart", function(event) {
    // store the timestamp of the first tap
    firstTapTime = new Date().getTime();
    // store the element that was tapped
    tappedElement = event.target;
});

// add a touchend event listener to the document
document.addEventListener("touchend", function(event) {
    // check if the second tap occurred within 60 milliseconds of the first tap
    if (new Date().getTime() - firstTapTime < 60) {
        // double tap detected
        console.log("Double tap detected!");
        var player = GetPlayer();
        player.SetVar("DoubleTap",true);
        
    }
});

  
    
    
 


}

function Script48()
{
  localStorage.setItem("SwipeUp", "false");
localStorage.setItem("SwipeDown", "false");
var player = GetPlayer();

var initialY;

document.addEventListener('touchstart', function(event) {
    initialY = event.touches[0].clientY;
}, false);

document.addEventListener('touchend', function(event) {
    var finalY = event.changedTouches[0].clientY;
    if (initialY > finalY) {
        console.log("Swipe Up");
        player.SetVar("SwipeUp",true);
        
       
    } else if (initialY < finalY) {
        console.log("Swipe Down");
        player.SetVar("SwipeDown",true);
        
    }
}, false);
}

function Script49()
{
  function copyToClipboard(text) {
  var textArea = document.createElement("textarea");
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
}

var player = GetPlayer();
var text = player.GetVar("VideoLink");
copyToClipboard(text);

}

function Script50()
{
  var player = GetPlayer();
var videoLink = player.GetVar("VideoLink");
window.open(`https://www.facebook.com/sharer/sharer.php?u=${videoLink}`, "_blank");
}

function Script51()
{
  var player = GetPlayer();
var videoLink = player.GetVar("VideoLink");
window.open(`https://www.instagram.com/sharer/sharer.php?u=${videoLink}`, "_blank");
}

function Script52()
{
  var player = GetPlayer();
var videoUrl = player.GetVar("VideoLink");
var link = "mailto:?subject=" + encodeURIComponent("Check out this video") + "&body=" + encodeURIComponent(videoUrl);
    window.location.href = link;
    
}

function Script53()
{
  var player = GetPlayer();
var videoLink = player.GetVar("VideoLink");
window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${videoLink}`, "_blank");
}

function Script54()
{
  var player = GetPlayer();
var videoLink = player.GetVar("VideoLink");
window.open(`https://twitter.com/share?url=${videoLink}`, "_blank");
}

function Script55()
{
  var player = GetPlayer();
var link = player.GetVar("VideoLink");
    var message = "Check out this Video: " + link;
    var whatsapp_url = "https://api.whatsapp.com/send?text=" + encodeURIComponent(message);
    window.open(whatsapp_url, '_blank');
}

function Script56()
{
  chnage_Position();
set_Optcity();
hide_Control();
add_Margin();

//Chnage Position	
function chnage_Position()
{	
var modernVideoControls = document.getElementsByClassName("modern-video-controls");
var videoSeekbar = document.getElementsByClassName("video-seekbar");
var videoSeekbarHitarea = document.getElementsByClassName("video-seekbar-hitarea");

for (var i = 0; i < modernVideoControls.length; i++) {
    modernVideoControls[i].style.position = "none";
}

for (var i = 0; i < videoSeekbar.length; i++) {
    videoSeekbar[i].style.position = "none";
}

for (var i = 0; i < videoSeekbarHitarea.length; i++) {
    videoSeekbarHitarea[i].style.position = "none";
}
}

// Set Opicity 
function set_Optcity()
{
var modernVideoControls = document.getElementsByClassName("modern-video-controls");
var videoAnimationContainer = document.getElementsByClassName("video-animation-container");
var controlBackground = document.getElementsByClassName("control-background");

for (var i = 0; i < modernVideoControls.length; i++) {
    modernVideoControls[i].style.backgroundColor = "rgba(0, 0, 0, 0)";
}

for (var i = 0; i < videoAnimationContainer.length; i++) {
    videoAnimationContainer[i].style.backgroundColor = "rgba(0, 0, 0, 0)";
}

for (var i = 0; i < controlBackground.length; i++) {
    controlBackground[i].style.backgroundColor = "rgba(0, 0, 0, 0)";
}
}	

//Hide COntrol
function hide_Control()
{

	var classes = ["video-controlbar", "seek-enabled", "elapsed-time-enabled", "volume-enabled", "playback-speed-enabled", "pip-enabled", "full-screen-enabled"];
  
  classes.forEach(function(className) {
    var x = document.querySelectorAll("." + className);
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
  });
	
}

 //Add Margin
 function add_Margin()
 {
var modernVideoControls = document.getElementsByClassName("modern-video-controls");
var videoSeekbar = document.getElementsByClassName("video-seekbar");

for (var i = 0; i < modernVideoControls.length; i++) {
    modernVideoControls[i].style.marginTop = "38px";
}

for (var i = 0; i < videoSeekbar.length; i++) {
    videoSeekbar[i].style.marginTop = "38px";
}

 }
}

function Script57()
{
  var player = GetPlayer();

player.SetVar("SwipeDown", false);
player.SetVar("SwipeUp", false);

var playing = player.GetVar("Isplaying");

if (playing === false){

player.SetVar("isplaying", true);

}

player.setVar("DoubleTap", false);

}

function Script58()
{
  // variable to store the timestamp of the first tap
var firstTapTime;

// variable to store the element that was tapped
var tappedElement;

// add a touchstart event listener to the document
document.addEventListener("touchstart", function(event) {
    // store the timestamp of the first tap
    firstTapTime = new Date().getTime();
    // store the element that was tapped
    tappedElement = event.target;
});

// add a touchend event listener to the document
document.addEventListener("touchend", function(event) {
    // check if the second tap occurred within 60 milliseconds of the first tap
    if (new Date().getTime() - firstTapTime < 60) {
        // double tap detected
        console.log("Double tap detected!");
        var player = GetPlayer();
        player.SetVar("DoubleTap",true);
        
    }
});

  
    
    
 


}

function Script59()
{
  localStorage.setItem("SwipeUp", "false");
localStorage.setItem("SwipeDown", "false");
var player = GetPlayer();

var initialY;

document.addEventListener('touchstart', function(event) {
    initialY = event.touches[0].clientY;
}, false);

document.addEventListener('touchend', function(event) {
    var finalY = event.changedTouches[0].clientY;
    if (initialY > finalY) {
        console.log("Swipe Up");
        player.SetVar("SwipeUp",true);
        
       
    } else if (initialY < finalY) {
        console.log("Swipe Down");
        player.SetVar("SwipeDown",true);
        
    }
}, false);
}

function Script60()
{
  function copyToClipboard(text) {
  var textArea = document.createElement("textarea");
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
}

var player = GetPlayer();
var text = player.GetVar("VideoLink");
copyToClipboard(text);

}

function Script61()
{
  var player = GetPlayer();
var videoLink = player.GetVar("VideoLink");
window.open(`https://www.facebook.com/sharer/sharer.php?u=${videoLink}`, "_blank");
}

function Script62()
{
  var player = GetPlayer();
var videoLink = player.GetVar("VideoLink");
window.open(`https://www.instagram.com/sharer/sharer.php?u=${videoLink}`, "_blank");
}

function Script63()
{
  var player = GetPlayer();
var videoUrl = player.GetVar("VideoLink");
var link = "mailto:?subject=" + encodeURIComponent("Check out this video") + "&body=" + encodeURIComponent(videoUrl);
    window.location.href = link;
    
}

function Script64()
{
  var player = GetPlayer();
var videoLink = player.GetVar("VideoLink");
window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${videoLink}`, "_blank");
}

function Script65()
{
  var player = GetPlayer();
var videoLink = player.GetVar("VideoLink");
window.open(`https://twitter.com/share?url=${videoLink}`, "_blank");
}

function Script66()
{
  var player = GetPlayer();
var link = player.GetVar("VideoLink");
    var message = "Check out this Video: " + link;
    var whatsapp_url = "https://api.whatsapp.com/send?text=" + encodeURIComponent(message);
    window.open(whatsapp_url, '_blank');
}

