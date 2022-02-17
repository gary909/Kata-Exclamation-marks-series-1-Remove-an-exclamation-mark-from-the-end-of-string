function remove (string) {
    const last = string.charAt(string.length - 1); //Find last char
    if (last == "!"){ // if last char = '!' then do this...
        return string.slice(0, -1); //lop of the end
    }
    return string; // else return the string unchanged
}

console.log(remove("Hi!")); // return "Hi"
console.log(remove("Hi!!!")); // return "Hi!!"
console.log(remove("!Hi!")); // return "!Hi"