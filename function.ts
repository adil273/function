
// FUCNTION BAISC

function sum1(n1:number,n2:number) {
    console.log(n1+n2);
}
sum1(10,20);

// FUCNTION WITH RETURN VALUE 
function sum2(n3:number,n4:number):number{
    var sum2=n3+n4;
    return sum2;
}
var result = sum2(2,4);
console.log(result);

//Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the valueat the specified index in the array.
// Return the modified array

function first(array:number[],index:number,value:number):number[]{

    array.splice(index,0,value)
    return array;

}
var newarray:number[]=first([1,2,3,4,5,],4,100);
console.log(newarray);


