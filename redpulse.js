function checkEligibility(){

let name = document.getElementById("name").value;

let age = document.getElementById("age").value;

let weight = document.getElementById("weight").value;

let result = document.getElementById("result");

if(name === "" || age === "" || weight === ""){
    result.innerHTML = "Please fill all fields";
    result.style.color = "orange";
    return;
}

if(age < 18 || weight <= 50){
    result.innerHTML = name + ", you are NOT eligible for blood donation.";
    result.style.color = "red";
}

else{
    result.innerHTML = name + ", you are eligible for blood donation. ❤️";
    result.style.color = "green";
}

document.getElementById("taskBox").style.display = "block";

}