  
  //form.addEventListener("submit", robohood);
  let form = document.getElementById("numbers");


let newArray = []
let stApart = parseInt("input#input1");
console.log(stApart)
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
let output1 = newArray.join().toString()

 
//----------------------//-----------------//----------------//--------------//--------------//


 output1 = document.getElementsByTagName("p#output").innerText

window.addEventListener("load", function() {
  function prevent(event) {
    event.preventDefault();
  }

});



