// Write a script that prints "Start," then uses setTimeout to print "Middle" after 2 seconds, and finally
//      prints "End." Observe the order.
console.log("Start");
setTimeout(() => {
  console.log("Middle");
}, 2000);
console.log("End");
