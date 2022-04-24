# Mr. Roboger's Neighborhood

by Sean Julius

This webpage is designed to give an introduction to Sean Julius's beginnings in coding.
Technologies Used
* _Java Script_
* _HTML_
* _CSS_

## Application Setup Instructions

Clone this repository to your desktop.
Navigate to the top level of the directory.
Open Portfolio-Landing-Page
Open Index.html

## Known Bugs

No known bugs


Copyright (c) 2022 Sean Julius
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Specifications

describe : beep()

Test: "It should return an array of numbers with 1s listed as "beep!""
code: beep(input);
expected output: [0,Beep!,2,3,4,5,6....]
Test: "Test returned "Beep!"

Test: "Should return list of numbers with 1s listed as "beep!" and 2s as "boop!""
code: beep(input) If count includes 1 , else if count includes 2
expected output: [0,Beep!,Boop!,3,4,5,6....]
Test: "Test returned "Beep!" and "Boop!"

Test: ""Should return list of numbers with 1s listed as "beep!", 2s as "boop! and 3s as "Won't you be my neighbor?""
code: beep(input) If count includes 1 , else if count includes 2, else if count incudes 3
expected output: [0,Beep!,Boop!,Won't you be my neighbor?,4,5,6....]
Test: "Test returned "Beep!", "Boop!", and "Won't you be my neighbor?"

Test: ""Should return "Boop!" and "Won't you be my neighbor" at a hierarchy of substitutions"
code: beep(input) If count includes 3 , else if count includes 2, else if count incudes 1
expected output: [0,Beep!,Boop!,Won't you be my neighbor?,4,5,6....9, Beep!, Beep!, Boop!,Won't you be my neighbor?...]
Test: "Test returned "Beep!", "Boop!", and "Won't you be my neighbor?"