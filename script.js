

const form=document.getElementById("marksForm");
const result= document.getElementById("result");

form.addEventListener("submit", function(e){
e.preventDefault();


  const english = Number(document.getElementById("english").value);
  const math = Number(document.getElementById("math").value);
  const physicalSciences = Number(document.getElementById("physicalSciences").value);
  const lifeSciences = Number(document.getElementById("lifeSciences").value);
  const accounting = Number(document.getElementById("accounting").value);
  const sepedi = Number(document.getElementById("sepedi").value);

  const sum = english + math + physicalSciences + lifeSciences +accounting + sepedi;

  const average = sum/6;

  if(average >=60){
    result.textContent= "Your Average is :" + average + "% " + " You're on the right track";

  }else{
    result.textContent="Your Average is :" + average + "% " + " You're on the right track";
  }

});

