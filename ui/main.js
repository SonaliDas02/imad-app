//counter code
var button =document.getElementById('counter');

button.onclick = function () {
    
    //Make a request to the counter endpoint
    var request = new XMLhttpRequest();
    
    //Capture the response and store it in a variable
    request.onreadystatechange= function () {
        if(request.readyState === XMLhttpRequest.DONE){
            //Take some actions
            if(request.status === 200){
                var counter= request.responseText;
                var span =document.getElementById("count");
                span.innerHTML = counter.toString();
            }
        }
    
        //Not done yet
    };
    //Render the variable to the correct span
   request.open("GET", "http://sonisonalidas.imad.hasura-app.io/counter", true);
   request.send(null);
};