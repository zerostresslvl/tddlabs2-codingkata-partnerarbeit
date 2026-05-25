
# TO-DO list

1. write failing test and working function for: empty input -> 0. ✅
2. write failing test and working function for: [1,2,3,4,5] -> 6. ✅
3. write failing test and working function for: [2,2,3,3] -> 4. ✅
4. write failing test and working function for: [6,6,4,4,1,3] -> 2. ✅
5. write failing test and working function for: [3,5,3,5,4,2] -> 12. ✅

-> write minimal code in `src/string_calculator.js` to pass always and switch up with my partner for the cases
-> refactor if needed


- after all the testing we found a generic solution of dividing by 2 and then subtracting by 1 for all odd numbers
- then we add it all up as our return value and all even numbers are ignored

- testing for cases outside of the dice also so outside of 1 and 6 that's our current new test case so we're testing for edge cases just remembered it becomes an edge case in this condition thus we added it on 