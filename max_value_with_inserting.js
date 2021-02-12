function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    const el = '5';
    let maxNumber = parseInt(N.toString() + el);
    let arr = N.toString().split("");
    const inc = arr[0] === '-' ? 1 : 0;
    let count = arr.length;
    while(count >= inc){
        const runArr = [...arr];
        const res = runArr.splice(count, 0, el);
        count--;
        const num = parseInt(runArr.join(""));
        if(num > maxNumber){
            maxNumber = num
        }
    }
    
return maxNumber;
}


console.log(solution(-999));
console.log(solution(285));
