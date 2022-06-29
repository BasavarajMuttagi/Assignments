function ArmStrong(InputNumber){

for(let i = 0; i<= InputNumber; i++){
    let ArmStrongNumber = i;
    let Number = i;
    let check = i
    let Count = 0;

    
    while(Number > 0){
        Count ++;
        Number = parseInt(Number / 10);
    }

    let Power = Count
    let SumOfNumber = 0

    while(ArmStrongNumber > 0){
        let digit = ArmStrongNumber % 10;
        SumOfNumber = SumOfNumber + Math.pow(digit , Power)
        ArmStrongNumber = parseInt(ArmStrongNumber / 10);
    }

    if(check == SumOfNumber){
        console.log(SumOfNumber)
    }

}
}


