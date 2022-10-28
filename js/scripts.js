

 


let newArray = []
let stApart = parseInt(document.querySelector("input#input1"));
function wordRedo(element) {
  for (i = 0; i <= stApart; i++) {
    const element = i.toString();
    if (element.includes(3)) {
      newArray.push("Won't *zap* you be my...error...neighbor?");
    }
    else if (element.includes(2)) {
      newArray.push("Boop!");
    }
    else if (element.includes(1)) {
      newArray.push("Beep?");
    }
    else {
      newArray.push(element);
    }
    return newArray
    
  }
}
 
let output1 = document.getElementById("output")
 
//----------------------//-----------------//----------------//--------------//--------------//

let form = document.getElementById("numbers");
output1 = newArray
 form.addEventListener("submit", function(){

 });

form.addEventListener("load", function() {
  function robohood(event) {
    event.preventDefault();
  }

});



