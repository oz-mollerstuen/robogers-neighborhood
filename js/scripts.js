
window.addEventListener("load", function(event) {
  event.preventDefault();
  const form = document.getElementById("numbers");
  form.addEventListener("submit", wordRedo);
  });


//const button = document.querySelector("#button");
//button.addEventListener("submit", clickhandler);
//function clickhandler(event) {
//console.log("Button Clicked");
//}


//----------------------//-----------------//----------------//--------------//--------------//

let newArray = []
let stApart = document.querySelector("#input1");
function wordRedo(element) {
  console.log("ffs");
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
output1 = newArray

