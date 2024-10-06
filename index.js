let arr = [34, 42, 56, 32, 3, 6, 23, 56, 53, 234, 435];
for(i=0;i<=arr.length; i++){
    var count = 0;
    for(j=1; j<=arr[i]; j++){
        if(arr[i]%j==0){
            count++;
        }
    }
    if(count == 2){
        console.log(arr[i] + " is Prime no. :");
    }
}

for(i=0;i<=arr.length; i++){
    var count = 0;
    for(j=1; j<=arr[i]; j++){
        if(arr[i]%j==0){
            count++;
        }
    }
    if(count > 2){
        console.log(arr[i] + " is not Prime no. :");
    }
}
