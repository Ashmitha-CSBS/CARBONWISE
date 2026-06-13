function sendMessage(){

let input =
document.getElementById("userInput");

let message =
input.value.trim();

if(message==="") return;

let chatBox =
document.getElementById("chatBox");

let userDiv =
document.createElement("div");

userDiv.className="user-message";

userDiv.innerHTML=message;

chatBox.appendChild(userDiv);

let botDiv =
document.createElement("div");

botDiv.className="bot-message";

let reply="";

if(message.toLowerCase().includes("travel")){

reply =
"Use public transport, cycling, or carpooling to reduce emissions.";

}

else if(message.toLowerCase().includes("electricity")){

reply =
"Switch to LED bulbs and turn off unused appliances.";

}

else if(message.toLowerCase().includes("food")){

reply =
"Reducing meat consumption can significantly lower your carbon footprint.";

}

else{

reply =
"Consider reducing energy consumption, choosing sustainable transportation, and minimizing waste.";

}

setTimeout(()=>{

botDiv.innerHTML=reply;

chatBox.appendChild(botDiv);

chatBox.scrollTop =
chatBox.scrollHeight;

},500);

input.value="";

}