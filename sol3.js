let arr=[[1,2,3],
        [4,5,6],
        [7,8,9]];

for(let i=0;i<arr.length;i++){
  let bag= ""
  for(let j=0;j<arr[i].lenght;j++){
    bag+=arr[i][j]+ " "
  }
  console.log(bag)
}



let arr1=[[1,2,3],
         [4,5,6],
         [7,8,9]];


for(let i=0;i<arr1.length;i++){
  let bag= ""
  for(let j=0;j<arr1[i].length;j++){
    bag+=arr1[i][j]+ " "
    //console.log(arr[i][j])
  }
  console.log(bag)
}