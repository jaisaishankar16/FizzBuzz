function FizzBuzz(n){
    s="";
    for(let i=1;i<=n;i++){
        if(i%4==0 && i%5==0){
            s+="FizzBuzz ";
        }
        else if(i%4==0){
            s+="Fizz ";
        }
        else if(i%5==0){
            s+="Buzz ";
        }
        else{
            s+=i+" ";
        }
    }
    console.log(s)
}
num=8309102792
n=0
while(num>0){
    n+=num%10;
    num=Math.floor(num/10);
}
FizzBuzz(n);