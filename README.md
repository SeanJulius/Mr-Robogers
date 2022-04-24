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