function calculateCarbon(){

let travel =
parseFloat(document.getElementById("travel").value) || 0;

let electricity =
parseFloat(document.getElementById("electricity").value) || 0;

let food =
parseFloat(document.getElementById("food").value) || 0;

let carbon =
(travel * 0.21) +
(electricity * 0.5) +
(food * 2);

let level = "";

if(carbon < 50){

level = "🟢 Low Impact - Great Job!";

}

else if(carbon < 150){

level = "🟡 Moderate Impact - You Can Improve";

}

else{

level = "🔴 High Impact - Reduce Emissions";

}

document.getElementById("resultBox").style.display="block";

document.getElementById("carbonResult").innerHTML =
carbon.toFixed(2) + " kg CO₂";

document.getElementById("impactLevel").innerHTML =
level;

}