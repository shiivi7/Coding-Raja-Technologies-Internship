function addNewWEField()
{
//console.log("Adding new field");

let newNode=document.createElement('textarea');
newNode.classList.add('form-control');
newNode.classList.add('weField');
newNode.classList.add('mt-2');
newNode.setAttribute("rows",3);
newNode.setAttribute('placeholder','Enter here');


let weOB = document.getElementById('we');
let WeAddButtonOb = document.getElementById('WeAddButton');

weOB.insertBefore(newNode, WeAddButtonOb);

}

function addNewSkillsField()
{

let newNode=document.createElement('textarea');
newNode.classList.add('form-control');
newNode.classList.add('sklField');
newNode.classList.add('mt-2');
newNode.setAttribute("rows",3);
newNode.setAttribute('placeholder','Enter here');


let sklOb = document.getElementById('skl');
let sklAddButtonOb = document.getElementById('sklAddButton');

sklOb.insertBefore(newNode, sklAddButtonOb);

}
//generate Resume
function generateResume(){
    // console.log("generateResume"); to check whether function is working on console ->inspect->console->generate resume

let nameField=document.getElementById("nameField").value;
let nameT1=document.getElementById('nameT1');
nameT1.innerHTML=nameField;

//direct procedure of putting values in fields
document.getElementById("nameT2").innerHTML=nameField;

//contact
document.getElementById("contactT").innerHTML=document.getElementById("contactField").value;

//address
document.getElementById("addressT").innerHTML=document.getElementById("addressField").value;
//email
document.getElementById("emailT").innerHTML=document.getElementById("EmailField").value;
//links
document.getElementById("linkedT").innerHTML=document.getElementById("linkedInField").value;
document.getElementById("fbT").innerHTML=document.getElementById("fbField").value;
document.getElementById("githubT").innerHTML=document.getElementById("githubField").value;
//objective

document.getElementById("objectiveT").innerHTML=document.getElementById("objectiveField").value;
document.getElementById("eduT").innerHTML=document.getElementById("eduField").value;

//WE 

let wes = document.getElementsByClassName("weField");
let str="";
for(let e of wes) {
str = str + '<li> ${e.value} </li>';
}
document.getElementById('weT').innerHtml = str; 
  //skills
let skls = document.getElementsByClassName("SkillsField");
let str1="";
for(let e of skls) {
str1 += '<li> ${e.value} </li>';
}
document.getElementById('sklT').innerHtml = str1; 

document.getElementById('resume-form').style.display= "none";
document.getElementById('resume-template').style.display= "block";

}

//print resume
function printResume(){
    window.print();
}
