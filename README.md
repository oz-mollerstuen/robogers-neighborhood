# _Mr Robogers Neighborhood_

#### By: 
## Lucas Mollerstuen

#### _An application to convert a select amount of numbers into words or phrases_

## Technologies Used

* Javascript
* CSS
* HTML
* Bootstrap

## Description
#### _using a for loop incombination with if/else if statements this program is made to take a string of numbers, converting them into an array, and cycling through them to pick out the ones, twos, and three. Each pre-selected number is then transmuted into either a 'Beep', 'Boop', or 'Won't you be my neighbor' through the magic of Mr Radgers (but mainly: if (input2[i] == 3) {newArray.push(" Won't *zap* you be my...error...neighbor?");) The array is then presented back to the user with the refined style of a broken robot version of Mr Rodgers_
__
## Setup/Installation Requirements

### Install from github (https://github.com/oz-mollerstuen/robogers-neighborhood.git) and open index.html.
#### Alternitively visit https://oz-mollerstuen.github.io/robogers-neighborhood
  
### No known bugs

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





``` Describe: stApart

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

Describe: For() loop

Test: it should remove function and change variables
Code: for (let i = 0; i < input2.length; i++) {
Expected Output: it should actually capture the correct numbers in the array

Test: It should put words in the array
Code: newArray.push("beep")
Expected Output: "beep"

Test: It should output the correct numbers in the array if not 1,2,3
Code: newArray.push(input2[i]);
Expected Output: Beep, Boop, 4, 5

Describe: Second for loop

Test: It should not work if a letter is entered
Code: if (input[i].includes())
Expected Output: Break the loop if letters are present

result is incorrect, saving for memory purposes, need to study further.

Test: It should add one more number to track
Code:   else if (input2[i] == 6) {
     newArray.push("Execute order 66. FOR THE EMPIRE!");
     }
Expected Output: Set the clones on the jedi commanders.

