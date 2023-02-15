function talk(){

    var know ={
        "who are you" : "Hello, This is SP",
        "how are you" : "I am Fine, what about you?",
        "what it is about" : "It's about the Front-end Development",
        "ok thank you" : "Welcome !!"
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
