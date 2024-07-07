// const arr = [3, 3, 3, 5, 4, 5, 6, 23];
// let max=[0];

// for (let index = 0; index < arr.length; index++) {

   
//   if (index>max) {
//      max=arr[index];
//   }
// }

// console.log("the maximum number are", max);



function maxNumberofArry(){
  const arr=[23,34,54,6,64];
   const max= Math.max(...arr) // Spread the array elements as arguments to Math.max
  console.log(`print the maximum number of array${max}`);
}
maxNumberofArry();
