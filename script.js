

const form=document.getElementById("marksForm");

form.addEventListener("submit", function(e){
e.preventDefault();


  const english = Number(document.getElementById("english").value);
  const math = Number(document.getElementById("math").value);
  const physicalSciences = Number(document.getElementById("physical sciences").value);
  const lifeSciences = Number(document.getElementById("life sciences").value);
  const accounting = Number(document.getElementById("accounting").value);
  const sepedi = Number(document.getElementById("sepedi").value);

  console.log(english, math,physicalSciences, lifeSciences, accounting, sepedi);



})

