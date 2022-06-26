encrypter = message => {
    let encryptedMessage; 

    const messageArr = message.split("");
    console.log("message array", messageArr);

    let encryptedMessageArr = [];

    for (i = 0; i < messageArr.length; i++) {
        let letter; 
        switch(messageArr[i]) {
            case "a":
                letter = "~";
                break;
            case "b":
                letter = "!";
                break;
            case "c":
                letter = "@";
                break;
            case "d": 
                letter = "#";
                break;
            case "e": 
                letter = "$";
                break;
            case "f": 
                letter = "%";
                break;
            case "g": 
                letter = "^";
                break
            case "h":
                letter = "&";
                break;
            case "i":
                letter = "*";
                break;
            case "j":
                letter = "(";
                break;
            case "k":
                letter = ")";
                break;
            case "l":
                letter = "_";
                break;
            case "m": 
                letter = "{";
                break;
            case "n": 
                letter = "¥";
                break;
            case "o":
                letter = "₦";
                break;
            case "p": 
                letter = ":";
                break;
            case "q":
                letter = "'";
                break;
            case "r":
                letter = "<";
                break;
            case "s":
                letter = ">";
                break;
            case "t":
                letter = "?"
            case "u": 
                letter = "|";
                break;
            case "v":
                letter = "[";
                break;
            case "w":
                letter = "]";
                break;
            case "x":
                letter = ";"
                break;
            case "y":
                letter = ",";
                break;
            case "z":
                letter = ".";
                break;
            default: 
                letter = messageArr[i];
                
        }

        encryptedMessageArr.push(letter);
        console.log("encrypted message array", encryptedMessageArr);

    }
    encryptedMessage  = encryptedMessageArr.join("");
    return encryptedMessage;
};


console.log("encryted message array:", encrypter("Hello how are you"));

decrypter = message => {
    let decryptedMessage; 

    const messageArr = message.split("");
    console.log("message array", messageArr);

    let decryptedMessageArr = [];

    for (i = 0; i < messageArr.length; i++) {
        let letter; 
        switch(messageArr[i]) {
            case "~":
                letter = "a";
                break;
            case "!":
                letter = "b";
                break;
            case "@":
                letter = "c";
                break;
            case "#": 
                letter = "d";
                break;
            case "$": 
                letter = "e";
                break;
            case "%": 
                letter = "f";
                break;
            case "^": 
                letter = "g";
                break
            case "&":
                letter = "h";
                break;
            case "*":
                letter = "i";
                break;
            case "(":
                letter = "j";
                break;
            case ")":
                letter = "k";
                break;
            case "_":
                letter = "l";
                break;
            case "{": 
                letter = "m";
                break;
            case "¥": 
                letter = "n";
                break;
            case "₦":
                letter = "o";
                break;
            case ":": 
                letter = "p";
                break;
            case "'":
                letter = "q";
                break;
            case "<":
                letter = "r";
                break;
            case ">":
                letter = "s";
                break;
            case "?":
                letter = "t"
            case "|": 
                letter = "u";
                break;
            case "[":
                letter = "v";
                break;
            case "]":
                letter = "w";
                break;
            case ";":
                letter = "x"
                break;
            case ",":
                letter = "y";
                break;
            case ".":
                letter = "z";
                break;
            default: 
                letter = messageArr[i];
                
        }

        decryptedMessageArr.push(letter);
        console.log("decrypted message array", decryptedMessageArr);

    }
    decryptedMessage  = decryptedMessageArr.join("");
    return decryptedMessage;
};

console.log("The decryted message is ", decrypter("H$__₦ &₦] ~<$ ,₦|"));
