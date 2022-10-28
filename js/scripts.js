
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
let newArray = [];


function wordRedo(event) {
  event.preventDefault();

  let stApart = document.querySelector("input#input1").value;
  stApart = stApart.toString().split(" ");

  for (let i = 0; i <= stApart; i++) {
    //console.log(stApart[i]);
    //const element = i.toString();
   
    if (stApart[i] == 3) {
      console.log('it has a 3');
      newArray.push("Won't *zap* you be my...error...neighbor?");
    }
    else if (stApart[i] == 2) {
      console.log('it has a 2');
      newArray.push("Boop!");
    }
    else if (stApart[i] == 1) {
      console.log('it has a 1');
      newArray.push("Beep?");
    }
    else {
      newArray.push(stApart[i]);
      
    }
    let output1 = document.getElementById("p#output")
    output1 = newArray.toString

  }
      console.log(newArray);
}
 

//}
 
  
  
