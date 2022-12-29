const number = parseInt(prompt("Enter a positive number: "));

function primenumbers(number)
{
    if (number <= 1) {
        return false;
    }
    else // check if number is greater than 1
    {
        for (let i = 2; i < number; i++) // looping through 2 to number-1
        {
            if (number % i == 0)
            {
                return false;
            }
        }
        return true;
    }
}
function checkPrime(number)
{
    if(primenumbers(number))
    {
        console.log(`${number} is a prime number`);
    }
    else
    {
        console.log(`${number} is a not prime number`);
    }
}
function printDifference(number)
{
    let primeNumber=number;
    // check for next prime number
    while(true)
    {
        primeNumber=primeNumber+1;
        if(primenumbers(primeNumber))
        {
            console.log('difference between given number and next prime number is',primeNumber-number);
            break;
        }
    }
}
checkPrime(number);
printDifference(number);