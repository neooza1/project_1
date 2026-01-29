

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
  const lifeOrientation = Number(document.getElementById("lifeOrientation").value);

  const sum = english + math + physicalSciences + lifeSciences +accounting + sepedi + lifeOrientation;

  const average = Math.round(sum / 7);
   result.className="";
  if(average >=75){
    result.textContent= "Your Average is : " + average + " % " + " Strong performance - maintain consistency";


  }else if (average >= 60 ){
    result.textContent=" Your Average is :  " + average + " % " + " Good Progress - focus on weaker subjects";
    

  }else if (average >50){
    result.textContent = "Your Average is : " + average + " % " + " At risk - targeted improvement needed";
    

  }else{
    result.textContent = " Critical - academic support recommended";

    return;
  }

   if(
  english === 0 || 
  math === 0 || 
  physicalSciences === 0 || 
  lifeSciences === 0 || 
  accounting === 0 || 
  sepedi === 0 ||
  lifeOrientation ==0
   ){
  result.textContent = "Please fill in all subjects.";
  return;
}

if( english <0 || english >100 || sepedi <0 || sepedi >100 
  || math <0 || math>100 || physicalSciences <0 || physicalSciences >100 ||
  lifeSciences <0 || lifeSciences >100 || accounting <0 || accounting >100 ||
  lifeOrientation <0 || lifeOrientation >100

 ){
  result.textContent=" Please Enter Valid marks between 0 and 100";
  return;

}
   



});

