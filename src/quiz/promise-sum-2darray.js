const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

function sum2DArray(arr, rowIndex) {
    return new Promise((resolve, reject) => {
        console.log('Sum called ... ');
        if(Array.isArray(arr)) {
            setTimeout(() => {
                let sum = 0;
                for (let j = 0; j < arr[rowIndex].length; j++) {
                    sum += arr[rowIndex][j];
                }
                console.log('resolving ... ');
                resolve(sum);
            }, 0);
        }
        else {
            console.log('rejecting ... ');
            reject('BAD INPUT: Expected array as input');
        }
        console.log('returning from sum');
    });    
}

rowSum = []

for (let i = 0; i < array2D.length; i++) {
    rowSum.push(sum2DArray(array2D, i))
}

Promise.all(rowSum)
    .then((rowSum) => {
      let sum = 0;
      rowSum.forEach(element => {
        sum += element;
      });
      console.log(`Sum = ${sum}`)
    })
    .catch((error) => {
        console.error(`Failed to fetch: ${error}`);
    });