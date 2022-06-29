function Count(array){
    var NumberArray = array
    var odd = 0,even = 0,zero = 0;
    for(let iterator = 0; iterator < NumberArray.length; iterator++){
        if(NumberArray[iterator] == 0)
        {
            zero++;
        }
        if(NumberArray[iterator]%2 == 0)
        {
            even++;
        }
        if(NumberArray[iterator]%2 == 1){
            odd++
        }
    }

    console.log('Zero:',zero," ",'Even:',even," ",'Odd:',odd)
}