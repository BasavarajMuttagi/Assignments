function Factorial(Number){
    
    var factorial = 1
    if (Number === 0) {
        return 1;
    }
    for(let iterator = 1; iterator <= Number; iterator++){
        factorial = factorial * iterator;
    }
    return factorial;
}


