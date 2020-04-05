// Output triangle
//
// ---target output---
// #####
// ####
// ###
// ##
// #
// -----------------
// 
// procedural way

const char = '#'
const height = 5

for(i = height; i > 0; i--){
    console.log(char.repeat(i))
}