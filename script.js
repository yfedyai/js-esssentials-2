
// 1. A function which prints str after n seconds.

// function printTimeout (str,n){


//     setTimeout(function(){console.log(str)},n*1000);

// }
    

// printTimeout('hi jack',3)



// 2. A function which returns sum of all numbers from 1 to n using recursion.

// function sumAll(n) {  
//     if (n!==0) {
        
//         return n + sumAll(n-1)        
//     }
//     else {
//         return n;
//     }
    
// }
// console.log(sumAll(3))

// 3.A function which takes str and time in seconds as arguments, then every second it should count down from time to 0 and print current time to console when time equals to 0 it prints str


// function bombTimer (str, time) {
//     var timer = setInterval(()=>{   
//         if(time!=0) {
//             console.log(time);
//             time--;
//         }
//         else {
//             clearInterval(timer);
//             console.log(str);
//         }        
//     },1000)
// }

// bombTimer ('BOBBM',3)




// 4.function which returns factorial of number using recursion.


// function factorial(n) {
//     if(n!=0) {
//         return n*factorial(n-1)
//     }
//     else {
//         return 1;
//     }
// }

// console.log(factorial (5));


// 5.Implement function from task №3 (bombTimer) using recursion and setTimeout.

// function bombTimer2(str,time) {

//     var timerID= setTimeout(function count() {
//         if(time!==0) {
//             console.log(time)           
//             time--;
//             setTimeout(count, 1000)
            
//         }
//         else {
//             console.log(str);
//         }
//     },1000)
    
// }

// bombTimer2('recursion boom', 10)



//6. A function which takes an array of numbers and maxNumber, the function returns new array with numbers not higher than maxNumber.

// function filterNumbers (arr, maxNumber) {

//     var result = arr.filter((elem) => elem < maxNumber)    //проходит по каждому elem от arr и если меньше,вовзращает и записывает в ответ resul  
//     return result;
// }

// console.log(filterNumbers([1, 4, 8, 1, 20], 5));


// 7.  остортировать массив по возрастанию, и макс- это length-1, а min - это первый