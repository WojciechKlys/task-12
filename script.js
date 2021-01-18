const numbers = [4,87,56,2,44,90,12,15,32,17,33,5];

numbers.forEach((Y, X) => {
    console.log('Index: ' + X + ' Value: ' + Y);
});

var diversableByFive = numbers.filter(Y => Y % 5 === 0);

console.log(diversableByFive);

const map = numbers.map(Y => Y + 100);

console.log(map);
