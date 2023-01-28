var speechRecognition = window.webkitspeechRecongnition;

var recognition = new recognition;

function start(){
    document.getElementById("textbook").innerhtml = "";
    recognition.start();
 
}
    recognition.onresult = function(event) {
       console.log (event);

       var content = event.results[0][0].transcript ;
       console.log(content) ;

       document.getElementById("textbook").innerhtml = Content ;
    }

    var SpeechRecognisation = window.webkitSpeechRecongnisation

     var recognisation = new SpeechRecognisation();

    function start() {
        document.getElementById("textbook").innerhtml;
        recognisation.start();
    }

    recognisation.onresult = function(event) {
        console.log (event);
    var content = event.results[0][0].transcript;

    document.getElementById("textbook").innerhtml = content;
    console.log(content);
    speak();
    }

    function speak() {
        var synth = window.speechsynthesis ;

        speak_data = document.getElementById("textbook").value;

        var utterThis = new SpeechSynthesisUtterance (speak_data);

        synth.speak(utterThis);

        webcam.attatch(camera);
    }
Webcam.set({
    width : 360,
    height : 250, 
    image_format: 'png',
    png_quality :90,
 });

 camera = document.getElementbyId("camera");
    
