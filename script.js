function addNewWEField(){
    
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter Here");

    let weOb =document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");
    weOb.insertBefore(newNode,weAddButtonOb);
}
function addNewAQField(){

    let newNode =document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter Here");

    let aqOb =document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode, aqAddButtonOb);

}


//generating cv
function generateCV(){
    //console.log("genrating cv");
    let nameField=document.getElementById("nameField").value;
    let nameT1 = document.getElementById("nameT1");
    nameT1.innerHTML= nameField;

    // direct
    document.getElementById("nameT2").innerHTML=nameField;


    //contact
    document.getElementById("contactT").innerHTML =document.getElementById("contactField").value;
    //Address
    document.getElementById("addressT").innerHTML = document.getElementById("addressField").value;

    //facbook
    document.getElementById("fbT").innerHTML = document.getElementById("fbField").value;

    //INstagram
    document.getElementById("instaT").innerHTML = document.getElementById("instaField").value;

    //LinkedIn
    document.getElementById("linkedT").innerHTML = document.getElementById("linkedField").value;


   //Objective

   document.getElementById("objectiveT").innerHTML = document.getElementById("ObjectiveField").value;
   
   //work Experience
   let wes =  document.getElementsByClassName("weField");

   let str ="";
   for(let e of wes)
   {
     str = str + `<li> ${e.value}  </li>`;
   }
   document.getElementById("weT").innerHTML = str;

   //academic Qualification

   let aqs = document.getElementsByClassName("aqField");

   let str1 ="";
   for (let  e of aqs) {
    str1 = str1 + `<li> ${e.value}  </li>`;
   }

   document.getElementById("aqT").innerHTML = str1;

   document.getElementById('cv-form').style.display ='none';
   document.getElementById('cv-template').style.display = "block";


}


function printcv(){
    window.print();
}