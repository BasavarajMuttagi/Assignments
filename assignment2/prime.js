function IsPrime(Number){
    var flag = 0;
if (Number == 0 || Number == 1)
    flag = 1;

  for (i = 2; i <= Number/2; i++) {
    if (Number % i == 0) {
      flag = 1;
      break;
    }
  }

  if(flag == 0){
    return "Yes"
  }
  return "No"
}
