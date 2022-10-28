Describe: stApart

Test: it should take the code and put it into an array
Code: let str = document.getElementById("input")
let splitStr = str.split(" ")
Expected Output: [input, from, user]

Test: add event listener
Code: window.addEventListener("load", function() {

    const form = document.getElementById("numbers");
    form.addEventListener("submit", robohood);

  });
Expected Output: will gather input

Describe: function wordredo

Test: it should find each number to change
Code: function wordRedo(element)
  for (let i = 0; i <= stApart; i++) {
    const element = i.toString();
  
Expected output: find all 1,2,&3s

Describe: join, to string

Test: it should change the array to a joined string
Code:const output1 = newArray.join().toString()  
Expected output: all elements of the array will now be a string