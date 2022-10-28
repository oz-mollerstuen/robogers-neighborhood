
let newArray = []
let stApart = parseInt("input#input1");

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
const output1 = newArray.join().toString()

 
//----------------------//-----------------//----------------//--------------//--------------//
window.addEventListener("load", function() {

  const form = document.getElementById("numbers");
  form.addEventListener("submit", robohood);

});



function robohood(event) {
  event.preventDefault();
}





