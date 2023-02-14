function talk(){

    var know ={
        "Who are you" : "Hello, This is SP",
        "How are you" : "I am Fine,...!!",
        "What it is about" : "It's about the Front-end Development",
        "ok Thank You" : "Welcome !!"
    };

var user = document.getElementById("userChat").value;

document.getElementById("chatLogger").innerHTML = user + "<br>";

if(user in know){
    document.getElementById("chatLogger").innerHTML = know[user] + "<br>";
}
else{
    document.getElementById("chatLogger").innerHTML = "Sorry,😥 I can't understand <br>";
}
}