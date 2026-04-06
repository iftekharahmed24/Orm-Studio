let tasks = [
"Drink 2 glasses of water",
"Read 5 pages of a book",
"Walk for 5 minutes",
"Write one positive thought",
"Stretch your body for 3 minutes"
];

function giveTask(){

let name = document.getElementById("username").value;

if(name == ""){

    alert("Please enter your name!");

    return;

}

function work(){

    let randomTask = tasks[Math.floor(Math.random()*tasks.length)];

    document.getElementById("greeting").innerHTML = "Hello " + name + " 👋";

    document.getElementById("task").innerHTML = "Your task: " + randomTask;

    document.getElementById("taskBox").style.display = "block";

}
work();


}

function completeTask(){

    alert("Great job! You completed your task 🎉");

    work();

    // let randomTask = tasks[Math.floor(Math.random()*tasks.length)];

    // document.getElementById("greeting").innerHTML = "Hello " + name + " 👋";

    // document.getElementById("task").innerHTML = "Your task: " + randomTask;

    // document.getElementById("taskBox").style.display = "block";

}