//counter code
var button =document.getElementById('counter');

button.onclick = function () {
    
    //Make a request to the counter endpoint
    var request = new XMLhttpRequest();
    
    //Capture the response and store it in a variable
    request.onreadystatechange = function () {
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
    //Make the request
   request.open('GET', 'http://sonisonalidas.imad.hasura-app.io/counter', true);
   request.send(null);
};
//submit name
 var nameInput = document.getElementByValue("name");
 var name = nameInput.value;
 var submit = document.getElementById("submit_btn");
 submit.onclick = function(){
   //make a request to the server and send the name
   //capture a list of names and render it as a list
   var names =['name1','name2','name3','name4'];
   var list = '';
   for (var i =0;i<names.length;i++){
       list == '<li>' + names + '</li>';
 }  
 var ul = document.findElementtById("nameList");
 ul.innerHTML = list;
 
 
 };