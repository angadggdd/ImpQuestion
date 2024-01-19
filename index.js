// Question 1=>  How can you pass parameters to a callback function in setTimeout?

// setTimeout =>  settimeout will take two argument first callback and second time in ms.
// setTimeout(callback function, time in ms)
// console.log("hallo1")
// setTimeout(function(){console.log("hallo2")},2000)
// console.log("hallo3")


// setTimeout(function (val1, val2) {
//     console.log(val1 + ' ' + val2);
// }, 1000, 'Hello', 'Angad');


// Question 2=> Discuss the use of anonymous functions or arrow functions as wrappers.

// const add = (a, b) => {
//     return a + b;
//   };     //this is Anonymous functions.
//   const wrapper = (originalFunction) => {
//     return (...argument) => {
//       console.log("Executing wrapper function");
//       const result = originalFunction(...argument);
//       console.log("Wrapper function completed");
//       return result;
//     };
//   };
  
//   const wrappedFunction = wrapper((a, b) => a + b);
//   console.log(wrappedFunction(2, 3)); // Outputs: 5


// Question 3=> Explain the concept of closure in the context of setTimeout and setInterval.

// closure => closure helps in making variables and function private.

// function outerFunction() {
//     const message = "Hello from outerFunction!";
  
//     function innerFunction() {
//       console.log(message);
//     }
  
//     setTimeout(innerFunction, 1000);
//   }
  
//   outerFunction();
// // setInterval
//   function counter() {
//     let count = 0;
  
//     function logCount() {
//       console.log(count);
//       count++;
//     }
  
//     setInterval(logCount, 1000);
//   }
  
//   counter();
// Question 4=>Discuss the execution context of the callback function used in setTimeout and setInterval.
// Question 5=>Describe how you would implement a countdown timer using setTimeout or setInterval.
// Question 6=> Include considerations for starting, pausing, and resetting the timer.

// let timerElement = document.getElementById('timer');
// let remainingTime = 0;
// let timerInterval;

// function updateTimer() {
//   const minutes = Math.floor(remainingTime / 60);
//   const seconds = remainingTime % 60;

//   // Display the timer in the format MM:SS
//   timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

//   if (remainingTime === 0) {
//     clearInterval(timerInterval);
//     timerElement.textContent = 'Countdown complete!';
//   } else {
//     remainingTime--;
//   }
// }

// function startTimer(durationInSeconds) {
//   clearInterval(timerInterval); // Clear any existing intervals

//   remainingTime = durationInSeconds;
//   updateTimer();

//   // Set up an interval to update the timer every second
//   timerInterval = setInterval(updateTimer, 1000);
// }

// function pauseTimer() {
//   clearInterval(timerInterval);
// }

// function resetTimer(durationInSeconds) {
//   clearInterval(timerInterval);
//   remainingTime = durationInSeconds;
//   updateTimer();
// }
// 
//Question 7 => How can setTimeout be used to create non-blocking asynchronous delays in JavaScript?

// Asynchronous delay using setTimeout
// setTimeout(() => {
//   console.log("Delayed execution after 2000 milliseconds");
// }, 2000);

// console.log("End");
// Question 7 => Discuss event loop and execution stack in your explanation.
// Asynchronous delay using setTimeout
// setTimeout(() => {
//     console.log("Delayed execution after 2000 milliseconds");
//   }, 2000);
  
//   console.log("End");

// Write a function that takes a function f and a time t as arguments and returns a function. The returned function, when executed, calls f after t milliseconds.

// function delayedExecution(f, t) {
//     return function() {
//       setTimeout(f, t);
//     };
//   }
   
//   function myFunction() {
//     console.log("Executing myFunction");
//   }
  

//   const delayedFunction = delayedExecution(myFunction, 2000);
//   delayedFunction();
  