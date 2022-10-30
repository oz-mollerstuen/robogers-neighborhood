
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


function wordRedo(event) {
  event.preventDefault();
  let newArray = [];
  let input2 = document.querySelector("input#input1").value;
  for (let i = 0; i < input2.length; i++) {
    if (input2[i] == 3) {
    //  console.log('it has a 3');
      newArray.push("Won't *zap* you be my...error...neighbor?");
    }
    else if (input2[i] == 2) {
     // console.log('it has a 2');
      newArray.push("Boop!");
    }
    else if (input2[i] == 1) {
     // console.log('it has a 1');
      newArray.push("Beep?");
    }
    else if (input2[i] == 6) {
     newArray.push("Execute order 66 ");
     }
    else {
      newArray.push(input2[i]);
    }
  }
  document.getElementById("output").innerText = newArray.join(", ");
  document.getElementById("proc").innerText = "It's a beautiful...critical error...in this neighborhood";
}

