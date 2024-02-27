const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];

function negArray(arr, rowIndex) {
    return new Promise((resolve, reject) => {
        console.log('Sum called ... ');
        if(Array.isArray(arr)) {
            setTimeout(() => {
                for (let i = 0; i < arr[rowIndex].length; i++) {
                    if (arr[rowIndex][i] < 0) {
                        resolve(arr[rowIndex][i]);
                    }
                }
                console.log('resolving ... ');
            }, 0);
        }
        else {
            console.log('rejecting ... ');
            reject('BAD INPUT: Expected array as input');
        }
        console.log('returning from neg');
    });    
}


negs = []

for (let i = 0; i < array2D.length; i++) {
    negs.push(negArray(array2D, i))
}

Promise.any(negs)
    .then((results) => {
        console.log(results)
    })
    .catch((error) => {
        console.error(`Failed to fetch: ${error}`);
    });

