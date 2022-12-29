//for loop - loops through a block of code a number of times
var fruits=["apple", "orange","mango","grape","guava"]
for(var i=0;i<fruits.length;i++)
{
    console.log(fruits[i]);
}

//while loop - loops through a block of code while a specified condition is true
// counting the number of digits
var num=11,count=0;
while(num>0)
{
   num=num/10;
   count++;
}
console.log(count);

//if else - to specify a block of code to be executed, if a specified condition is true otherwise else block is executed
//checking the given number is even number or odd
const num=10; // if we want to take input form user we can use prompt().
if(num%2==0)
{
    console.log("even");
}
else
{
    console.log("odd");
}

//continue - jumps over one iteration in the loop
for( var i=1;i<=10;i++)
{          
    if(i==5)
    {
     continue;    
    }    
    console.log(i);    
}

// switch statement - is used to specify many alternative blocks of code to be executed
const day = "sUndAy"; // if we want to take input form user we can use prompt().
switch (day.toLowerCase()) 
{
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":   
    case "friday":
        console.log("Weekday");
        break;
    case "saturday":
    case "sunday":
        console.log("Weekoff");
        break;
    default:
        console.log("please enter valid  day");
}
console.log(`The value is ${a}`);

// Recurrsion - making a function call itself
function fact(n)
{
    if(n==1)
      return 1;
    return n*fact(n-1);
}
const f = fact(10);
console.log(f);

//Closure - closure is a function having access to the parent scope, even after the parent function has closed.
function parent(){
    var a = 10;
    var b = 100;
    function clild(){
        return a;
    }
    return clild;
}
const returnedFun = parent();
const returnedValue = returnedFun();
console.log(returnedValue);







