let points = Number(localStorage.getItem("carbonPoints")) || 0;

document.getElementById("points").innerHTML = points;

let currentButton;

function openUpload(btn){

currentButton = btn;

document.getElementById("uploadModal").style.display =
"flex";

}

function closeModal(){

document.getElementById("uploadModal").style.display =
"none";

}

function verifyTask(){

let image =
document.getElementById("proofImage").files[0];

if(!image){

alert("Please upload an image first.");

return;

}

points += 10;

localStorage.setItem("carbonPoints", points);

document.getElementById("points").innerHTML =
points;

currentButton.innerHTML =
"✅ Completed";

currentButton.style.background =
"#555";

currentButton.disabled = true;

closeModal();

alert("🎉 Task Verified Successfully! +10 Points");

}
