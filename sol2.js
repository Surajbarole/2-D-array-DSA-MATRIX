let arr=[[1,2,3],
         [4,5,6],
         [7,8,9]];

let sum=0
for(let i=0;i<arr.length;i++){
  for(let j=0;j<arr[i].length;j++){
    sum=sum+arr[i][j]
    //console.log(arr[i][j])
  }
}
console.log(sum)


let array=[[1,2,3],
         [4,5,6],
         [7,8,9]];

let sum1=0
for(let i=0;i<arr.length;i++){
  for(let j=0;j<arr[i].length;j++){
    if(arr[i][j]%2==0){
      sum1=sum1+array[i][j]
    }
    //console.log(arr[i][j])
  }
}
console.log(sum1)

