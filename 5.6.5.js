
 var arr = [5, 5, 5, 5],
 ar = [5, 5, 5, "5"];

function foo(a) {
 return [...new Set(a)].length == 1

};

alert([foo(arr), foo(ar)]);