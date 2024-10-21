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
    ' ':  ' ',
};

function decode(expr) {
    let arr = [];
    let k = expr.length;
    for (let i = 0; i < k; i += 10){
        arr.push(expr.slice(0, 10));
        expr = expr.slice(10);
    }
    
    let result = [];
    for (let i = 0; i < arr.length; i++){
        if (arr[i] != "**********"){
            index = arr[i].indexOf('1');
            result.push(arr[i].slice(index));
        }
        else
            result.push("**********");
    }

    let morse = Array(result.length).fill("");
    for (let i = 0; i < result.length; i++){
        if (result[i] === "**********")
            morse[i] = " ";
        for (let j = 0; j < result[i].length - 1; j += 2){
            if (result[i][j] === "1" && result[i][j+1] === "0")
                morse[i] += ".";
            else if (result[i][j] === "1" && result[i][j+1] === "1")
                morse[i] += "-";
        }
    }
    
    let results = '';
    for (let i = 0; i < morse.length; i++){
        results += MORSE_TABLE[morse[i]]
    }
    
    return results;
}

module.exports = {
    decode
}