const num = 5;
const solution = fiboLoop(num);

function fiboLoop(num) {
    let a = 1, b = 1, result = 1;
    for (let i = 2; i <= num; i++) {
        result = a + b;
        a = b;
        b = result;
    }
    return result;
}

document.getElementById(".result").innerHTML = solutionArray;
const solutionArray = fiboArray(num);

function fiboArray(num) {
    let fibArr = [1, 1];
    for (let i = 2; i <= num; i++) {
        fibArr.push(fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2]);
    }
    // cant figure out how to return and show the result
    return fibArr;
}



