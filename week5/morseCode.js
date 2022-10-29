var alpha = {
    A: '.-',
    B: '-...',
    C: '-.-.',
    D: '-..',
    E: '.',
    F: '..-.',
    G: '--.',
    H: '....',
    I: '..',
    J: '.---',
    K: '-.-',
    L: '.-..',
    M: '--',
    N: '-.',
    O: '---',
    P: '.--.',
    Q: '--.-',
    R: '.-.',
    S: '...',
    T: '-',
    U: '..-',
    V: '...-',
    W: '.--',
    X: '-..-',
    Y: '-.--',
    Z: '--..',
    ' ': '/'
};

// Object to provide lookup of letter (value) for a given morse code (key).
var morse = {
    '.-': 'A',
    '-...': 'B',
    '-.-.': 'C',
    '-..': 'D',
    '.': 'E',
    '..-.': 'F',
    '--.': 'G',
    '....': 'H',
    '..': 'I',
    '.---': 'J',
    '-.-': 'K',
    '.-..': 'L',
    '--': 'M',
    '-.': 'N',
    '---': 'O',
    '.--.': 'P',
    '--.-': 'Q',
    '.-.': 'R',
    '...': 'S',
    '-': 'T',
    '..-': 'U',
    '...-': 'V',
    '.--': 'W',
    '-..-': 'X',
    '-.--': 'Y',
    '--..': 'Z',
    '/': ' '
};

// Return `true` if all characters are morse code.  Use a RegExp. 
function isMorse(characters) {
    
    let check=/^[.\- /]*$/.test(characters);
    return check;
}

// Return `true` if all characters are part of the alphabet defined in `alpha`.  Use a RegExp.
// Bonus: can you rewrite it using `Object.keys()` and your `alpha` Object instead?
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys 
function isAlpha(characters) {
    let check=/^[A-Z ]*$/.test(characters);
    return check;

}

// Given an alphabet message, convert and return in morse code.  Use your morse and/or alpha object.
// Return undefined if text is not alpha.
function textToMorse(text) {
    text=text.toUpperCase();

   
        var words=text.split(' ');

        let morseArr=[];
        for(let i=0;i<words.length;i++){
    let check=isAlpha(words[i]);
            if(check===false) return "false";
            let morseWord='';
          for(j=0;j<words[i].length;j++){
                var letter=words[i].charAt(j);
                morseWord+=alpha[letter]+' ';
          }  
          morseWord=morseWord.trim();
          morseArr.push(morseWord);
        }
        return morseArr.join('/');
    
    return "lol";
}
console.log(textToMorse("hello world"))
// Given a morse code message, convert and return in text.  Use your morse and/or alpha object.
// Return undefined if morse is not proper code.
function morseToText(m) {
    let check=isMorse(m);

    if(check===false) return "lol";
    m=m.replace(/[/]/g, ' / ');
    let newMorse=m.split(' ');
    
    let word='';
    for(i=0;i<newMorse.length;i++){
        word+=morse[newMorse[i]];
    }
    return word;
}

// Constructor function that takes a `message` (String), which can be either morse or alpha.
// Use your functions above to decide how to store a value for `any` on `this`  
function Message(any) {

    this.message=any?.toUpperCase();

}

// Return the message as morse code, converting if necessary
Message.prototype.toMorse = function() {
    if(isMorse(this.msg)) { 
        return this.msg;
    }

    return textToMorse(this.msg);
};

// Return the message as alpha characters, converting if necessary
Message.prototype.toAlpha = function() {
    if(isAlpha(this.msg)) {
        return this.msg;
    }
    
    return morseToText(this.msg);
};


var msg1 = new Message('--- -... .--- . -.-. - .../.. -./.--- .- ...- .- ... -.-. .-. .. .--. -/.- .-. ./...- . .-. -.--/.--. --- .-- . .-. ..-. ..- .-..');
console.log(msg1.toAlpha());
console.log(msg1.toMorse());

var msg2 = new Message('I am learning how to use Objects in JavaScript');
console.log(msg2.toMorse());
console.log(msg2.toAlpha());