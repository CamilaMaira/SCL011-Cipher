window.cipher = {
  
  encode: (offset,name) => {

    let result = "";
    for (let i = 0; i < name.length; i++) {
        let ascii = name.charCodeAt(i);
        let cipher = (ascii - 65 + offset) % 26 + 65;
        result += String.fromCharCode (cipher);
        
              
  }
  
  return result;


  },

  decode: (offset,name) => {
    
    let resultDecode = "";
    for (let i = 0; i < name.length; i++) {
        let ascii = name.charCodeAt(i);
        let cipherDecode = (ascii + 65 - offset) % 26 + 65;
        resultDecode += String.fromCharCode (cipherDecode);

  }

  return resultDecode; 

}}


