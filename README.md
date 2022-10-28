# _Mr Robogers Neighborhood_

#### By _**Lucas Mollerstuen**_

#### _{Brief description of application}_

## Technologies Used

* Javascript
* CSS
* HTML
* Bootstrap

## Description

_{This is a detailed description of your application. Give as much detail as needed to explain what the application does as well as any other information you want users or other developers to have.}_

## Setup/Installation Requirements

Install from github and open index
  
## Known Bugs

* Loop does not work, this is a work in progress _

## License
## Copyright (c) 2002, Lucas Mollerstuen

## Permission is hereby granted, free of charge, to any person obtaining a copy
## of this software and associated documentation files (the "Software"), to deal
## in the Software without restriction, including without limitation the rights
## to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
## copies of the Software, and to permit persons to whom the Software is
## furnished to do so, subject to the following conditions: 
## 
## The above copyright notice and this permission notice shall be included in all
## copies or substantial portions of the Software.
## 
## THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
## IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
## FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
## AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
## LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
## OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
## SOFTWARE.





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

Test: Combine event listeners
Code: window.addEventListener("load", function(event) {
  event.preventDefault();
  const form = document.getElementById("numbers");
  form.addEventListener("submit", wordRedo);
  });
Expected output: Will stop constant refresh

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