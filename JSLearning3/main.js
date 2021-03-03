var arr = [9,8,7,6,5,4];
for(var i=0; i<arr.length-1;i++){
    for(j=0;j<arr.length-i-1;j++){
        if(arr[j]>arr[j+1]){
            var tmp=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=tmp;
        }
    }
}
document.write(arr);