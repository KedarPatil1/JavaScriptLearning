const array_nums=[20,3,4,56,90,400,49];
console.log(array_nums);
//console.log(array_nums1)//created the shadow copy
array_nums[3]=66
array_nums[4]=40
console.log(array_nums)
array_nums.push[9]
console.log(array_nums)
let array_nums1=[...array_nums]
console.log("shadow copy",array_nums1)
array_nums1.push(10)
console.log("shadow copy",array_nums1)
console.log(`Merging of array`);
let x=[1,2,3,4];
let y=[5,6,7,8];
//let z=x.concat(y);
//console.log(`After concat`,z);
let z=[...x,...y]
console.log(`After concat`,z);


