const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

    const ten_eleven = {
        '10': '.',
        '11': '-',
      };
      

      function removeStartNulls (str) {
      while (str.startsWith('00')) {
        str = str.slice(2);
      };
      return str;
      }
      
  
      function decodeToMorse (str) {
      let arr = [];
      while (str) {
        let letter = str.slice(0,2);
        str = str.slice(2);
        arr.push(ten_eleven[letter]);
      };
      return arr.join('');
      }
      

      function decode(expr) {
      let our = '';
      
      while (expr) {
        let letterBin = expr.slice(0,10);
        expr = expr.slice(10);
      
        letterBin = removeStartNulls(letterBin);
        
        if (letterBin == '**********') {
          our += ' '
        } else {
          our += MORSE_TABLE[decodeToMorse(letterBin)];
        };
      };
        
      return our;
      };

module.exports = {
    decode
}