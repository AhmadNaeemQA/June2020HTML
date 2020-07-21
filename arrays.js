let quote = ["I", "am", "your", "friend"]

console.log(quote);

for (let i=0; i<quote.length; i++){
    console.log(quote[i]);
}

quote.pop();
quote.push("father");

for (let i=0; i<quote.length; i++){
    console.log(quote[i]);
}

