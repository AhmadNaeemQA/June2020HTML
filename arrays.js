let quote = ["I", "am", "your", "friend"]


function readAll(array){
    for (let i=0; i<array.length; i++){
        console.log(array[i]);
    }
}

console.log(quote);

readAll(quote)

quote.pop();
quote.push("father");

readAll(quote)

