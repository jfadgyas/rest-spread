// sum with reduce numbers
const sum = (...numbers) => {
    return numbers.reduce((result, nextNum) => {
        return result + nextNum;
    });
}

console.log(sum(1,3,5,7,9));

// sum with spread numbers
const numbers = [10, 20, 30];

const sumArray= (num1, num2, num3) => {
    return num1 + num2 + num3;
}

console.log(sumArray(...numbers));