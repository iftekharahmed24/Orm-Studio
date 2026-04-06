let students = [

{
name: "Iftekharahmed Barkat",
id: "2502106003",
department: "SCSA",
email: "2502106003@shreyarthuni.ac.in",
// phone: "1234567890",
// photo: "images/student3.jpg"
},

{
name: "Pravin Chaudhary",
id: "2502106006",
department: "SCSA",
email: "2502106006@shreyarthuni.ac.in",
// phone: "1234567890",
// photo: "images/student6.jpg"
},

{
name: "Raj Darji",
id: "2502106008",
department: "SCSA",
email: "2502106008@shreyarthuni.ac.in",
// phone: "1234567890",
// photo: "images/student8.jpg"
},

{
name: "Dhruv Prajapati",
id: "2502106032",
department: "SCSA",
email: "2502106032@shreyarthuni.ac.in",
// phone: "1234567890",
// photo: "images/student32.jpg"
},

{
name: "Keyur Prajapati",
id: "2502106033",
department: "SCSA",
email: "2502106033@shreyarthuni.ac.in",
// phone: "1234567890",
// photo: "images/student33.jpg"
},

{
name: "Kurvesh Prajapati",
id: "2502106034",
department: "SCSA",
email: "2502106034@shreyarthuni.ac.in",
// phone: "1234567890",
// photo: "images/student34.jpg"
},

{
name: "Yug Vadchhak",
id: "2502106055",
department: "SCSA",
email: "2502106055@shreyarthuni.ac.in",
// phone: "1234567890",
// photo: "images/student55.jpg"
}

];

function searchStudent(){

let input = document.getElementById("searchInput").value.toLowerCase();

let card = document.getElementById("studentCard");

let found = students.find(student =>
student.name.toLowerCase() === input ||
student.id === input
);

if(found){

card.innerHTML = `
<div class="card">
<img src="${found.photo}">
<h2>${found.name}</h2>
<p>ID: ${found.id}</p>
<p>Department: ${found.department}</p>
<p>Email: ${found.email}</p>
<p>Phone: ${found.phone}</p>
</div>
`;

}
else{

card.innerHTML = "<p>Student Not Found</p>";

}

}