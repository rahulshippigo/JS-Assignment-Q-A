let array1 = [1,2,3]
let array2 = [2,30,1];
let array3 = [];
for(let i=0;i<array1.length;i++){
  if(array3.indexOf(array1[i]) == -1)
     array3.push(array1[i])
}
for(let i=0;i<array2.length;i++){
  if(array3.indexOf(array2[i]) == -1)
     array3.push(array2[i])
}

console.log(array3);