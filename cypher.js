//Task


const caesarCypher = function (str, value) {
  

  // Create a variable that will store output
  let solution = "";

  // Loop through each character
  for (let i = 0; i < str.length; i++) {

    
    let character = str[i];

    // If it's a letter
    if (character.match(/[a-z]/i)) {

      // Get the character code of the letter
      let characterCode = str.charCodeAt(i);

      // Uppercase letters from the acsii table
      if (characterCode >= 65 && characterCode <= 90) {
        character = String.fromCharCode(((characterCode - 65 + value) % 26) + 65);
      }

      // Lowercase letters from the acsii table
      else if (characterCode >= 97 && characterCode <= 122) {
        character = String.fromCharCode(((characterCode - 97 + value) % 26) + 97);
      }
    }

    
    solution += character;
  }

  
  return solution;
};

console.log(caesarCypher("T dfnv le aczrclxxtyr. T hzfwo cplwwj wtvp dzxp dfaazce zc l qctpyo esle sld xzcp vyzhwporp ty aczrlxxtyr", 15))