window.addEventListener("load", function() {

  const form = document.getElementById("numbers");
  form.addEventListener("submit", robohood);

});

let newArray = []
let stApart = document.querySelector("input#input1")
function robohood(event) {
  event.preventDefault();
}

function wordRedo(element)
  for (let i = 0; i <= stApart; i++) {
    const element = i.toString();
    if (element.includes(3)) {
      newArray.push("Won't you be my...error...neighbor?");
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

