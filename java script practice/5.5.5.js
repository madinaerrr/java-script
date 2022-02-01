const arr =  ['груша', 'банан', 'сок','гоблин', 23, 56,];

console.log(arr.length);

arr.forEach(function(item, i, arr) {
    console.log( i + ": " + item + " (массив:" + arr + ")" );
  });

for (i = 0; i < arr.length; i++) { console.log(arr[i]); }
