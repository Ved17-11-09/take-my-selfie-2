var SpeechRecognition = window.webkitSpeechRecognition ;
var recognition1 = new SpeechRecognition() ;

function startb() {
    document.getElementById("textbox").innerHTML="" ;
    recognition1.start() ;
}

recognition1.onresult = function(event) {
   console.log(event) ;

   var Content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = Content; 
    console.log(Content);
}
