function SumOfFibonacci(Number)
{
    let  Fib = [];
    if (Number <= 0)
    return 0;
 
    Fib[0] = 0;
    Fib[1] = 1;
 
    var Sum = Fib[0] + Fib[1];
 
    for(let i = 2; i <= Number; i++)
    {
        Fib[i] = Fib[i - 1] + Fib[i - 2];
        Sum += Fib[i];
    }
 
   return Sum
}

