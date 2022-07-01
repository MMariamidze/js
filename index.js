 let num = [3,5,20,30,50,17,100,400,27,51];
//  let max = 0;
//  let secand = 0;

 for( let i = 0; i < num.length; i++ ){
    if (num[i]> max){
        secand=max
        max= num[i];
    }
   else if (max> num[i]>secand){
    secand=num[i];
   }  
 };
 console.log(secand)


//  function secondBigest () {
//     var firstBigest = Math.max(...num);
//     var position = num.indexOf(firstBigest);
//     num.splice(position, 1);
//     var answer = Math.max(...num);
//     console.log(answer)
// }
// secondBigest()
