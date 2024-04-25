// sorts from lowest to higest
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
console.log(points)

//sorting from descending
const point = [40, 100, 1, 5, 25, 10];
point.sort(function(a, b){return b - a});
console.log(point)

// sorting them randomly
const point1 = [40, 100, 1, 5, 25, 10];
point1.sort(function(){return 0.5 - Math.random()});
console.log(point1)

// fishers sorting
const point2 = [40, 100, 1, 5, 25, 10];
for (let i = point2.length -1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i+1));
  let k = point2[i];
  point2[i] = point2[j];
  point2[j] = k;
}

console.log(point2)

// math.min in arrays
function myArrayMin(arr) {
    return Math.min.apply(null, arr);
  }
const myArray1 = [12,67,89,76];
console.log(myArrayMin(myArray1))

// math.max in arrays
function myArrayMax(arr) {
    return Math.max.apply(null, arr);
  }
const myArray2 = [12,67,89,76];
console.log(myArrayMax(myArray2))


function myArrayMin(arr) {
    let len = arr.length;
    let min = Infinity;
    while (len--) {
      if (arr[len] < min) {  min = arr[len]; }
    }
    return min;
  }
  


