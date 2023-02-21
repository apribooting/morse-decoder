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

function decode(expr) {
  let keys = Object.keys(MORSE_TABLE);
  let values = Object.values(MORSE_TABLE);
  let prob = "**********";
  let arr = [];
  for (let i = 0; i < expr.length / 10; i++) {
    arr.push(expr.slice(i * 10, i * 10 + 10));
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === prob) {
      arr[i] = " ";
    } else {
      arr[i] = getStr(arr[i]);
      arr[i] = arr[i].match(/.{1,2}/g);
      arr[i] = getSymbol(arr[i]);
      for (let j = 0; j < keys.length; j++) {
        if (arr[i] === keys[j]) {
          arr[i] = values[j];
        }
      }
    }
  }
  function getStr(str) {
    let word = "";
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "1") {
        return (word += str.slice(i));
      }
    }
    for (let i = 0; i < word.length; i++) {
      word = word.slice(i * 2, i * 2 + 2);
    }
    return word;
  }
  function getSymbol(str) {
    let sym = "";
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "11") {
        sym += "-";
      } else {
        sym += ".";
      }
    }
    return sym;
  }
  return arr.join("");
}
module.exports = {
  decode,
};