// Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.
function getNum(){
    var arr;
    for(var i=0; i<=255; i++){
        i++;
        console.log(i)
    }
    return arr;
}
getNum()

// Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.

function totalEven(){
    var sum=0;
    for(var i=0; i<=1000; i++){
      if(i%2 === 0){
        sum += i;
        console.log(sum);
      }
    }
    return sum;
}
totalEven()


// Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).
function totalOdd(){
    var sum=0;
    for(var i=0; i<1000; i++){
      if(i%2 !== 0){
        sum += i;
        console.log(sum);
      }
    }
    return sum;
}
totalOdd()


// Iterate an array - Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).
var arr=[2,4,5,7]
function total(arr){
    var sum=0;
    for(var i=0; i<arr.length; i++){
      sum += arr[i];
    }
    return sum;
}
total(arr)
console.log(total(arr));


// Find max - Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)
var arr=[2,4,5,-7]
function findMax(arr){
    var max = arr[0];
    for(var i=0; i<arr.length; ++i){
      if(max < arr[i]){
        max = arr[i];
      }
    }
  return max;
}
findMax(arr);
console.log(findMax(arr))

// Find average - Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)
var arr=[2,4,5,7]
function findAvg(arr){
    var avg=0;
    var sum=0;
    for(var i=0; i<arr.length; ++i){
      sum = sum+arr[i];
      avg = sum/arr.length;
      console.log("the sum is"+sum)
      console.log(avg)
     }
  return avg;
}
findAvg(arr);

// Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.
function findOdd(){
    var arr=[];
    for(var i=0; i<10; i++){
      if(i%2 === 1){
        arr.push(i);
      }
    }
    return arr;
}
var a=findOdd();
console.log(a)

// Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).
var array=[2,3,4,5,6,7,8,9]
function findValue(array){
   var num = 8;
      for(var i=0; i<array.length; i++){
      if(array[i]>num){
        console.log(array[i]);
      }
    }
    return ;
}
findValue(array);


// Squares - Given an array with multiple values, write a function that replaces each value in the array with the value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])
var array=[2,3,4,5,6,7,8,9]
function squares(array){
   var newArr = [];
      for(var i=0; i<array.length; i++){
       newArr.push(array[i]*array[i]);
      }
    return newArr;
}

var a = squares(array);
console.log(a);

// Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])
var array=[2,3,-4,5,6,-1,8,9]
function replaceNagtive(array){
   for(var i=0; i<array.length; i++){
       if(array[i] < 0){
         array[i] = 0;
       }
      }
    return array;
}

var a = replaceNagtive(array);
console.log(a);

// Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])
var array=[2,3,4,5,6,7,8,9]
var max = array[0];
var min= array[0];
var avg;
var sum = 0;
function findNum(array){
     for(var i=0; i<array.length; i++){
     
       if(array[i] < min){
         min = array[i];
        }
     
       if(array[i] > max){
         max = array[i];
         
       }
       sum += array[i];
       avg = sum/array.length;
       
    }
    return (max, min, avg);
}
findNum(array);
console.log("The min is " +min);
console.log("The max is" +max);
console.log("The avg is" +avg);

// Swap Values - Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).
var array=[2,3,4,5,6,7,8,9]
function swapNum(array){
    for(var i=0; i<array.length-1; i++){
       [array[0], array[array.length-1]]= [array[array.length - 1], array[0]];
       
     }
  return array;
}
var a = swapNum(array);
console.log(a);

// Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].
var array=[2,3,-4,5,6,-1,8,9]
function replaceNagtive(array){
   for(var i=0; i<array.length; i++){
       if(array[i] < 0){
         array[i] = 'Coding';
       }
      }
    return array;
}

var a = replaceNagtive(array);
console.log(a);