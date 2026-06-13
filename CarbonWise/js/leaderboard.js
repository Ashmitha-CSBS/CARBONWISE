let userPoints = Number(localStorage.getItem("carbonPoints")) || 0;

document.getElementById("myPoints").innerHTML = userPoints;

let rank = "🌱 Beginner";

if(userPoints >= 50){
    rank = "🌿 Eco Warrior";
}

if(userPoints >= 100){
    rank = "🌳 Climate Champion";
}

document.getElementById("myRank").innerHTML = rank;