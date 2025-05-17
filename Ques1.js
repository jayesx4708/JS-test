
let arr = [1, 0, 2, 0, 3, 0, 4];
let num = 0;
let newarr = [];

    for (let i = 0; i < arr.length; i++) 
        {
            if (arr[i] !== num) 
                {
                    newarr.push(arr[i]);
                }
        }

console.log(newarr);

