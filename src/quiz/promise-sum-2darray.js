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

async function calculateSum() {
    rowSum = []

    for (let i = 0; i < array2D.length; i++) {
        rowSum.push(sum2DArray(array2D, i))
    }

    try {
        const sum = await Promise.all(rowSum);
        const totalSum = sum.reduce((acc, value) => acc + value, 0);
    
        console.log(`Sum = ${totalSum}`);
        return totalSum;
      } catch (error) {
        console.error(`Failed to fetch: ${error}`);
        throw error; // Propagate the error if needed
      }
}

calculateSum().then((status) => console.log(status))