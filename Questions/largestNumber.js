function largestNumber(){
    let arr=[
      [3,5,3,533,4],
      [3,5235,51,8],
      [9,6,4,42423,55532,54]
    ]
    let largestArr=[]
    for (let i = 0; i< arr.length; i++) {
      if(arr[i]>largestArr) {
        largestArr=arr[i]
      }
     
    }

    console.log(largestArr);
}


largestNumber();