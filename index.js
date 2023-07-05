//console.log("hello word")
//var myName="Pranav Upadhyay"
//console.log(myName)

//Data Types practice

//console.log(10+"20");
//console.log("java"+"Script");
//console.log(10-"20"); //bug1
//console.log(true+false); //true=1 , false=0

//var iAmuseless = null;
//console.log(iAmuseless);
//console.log(typeof(iAmuseless));//Bug 2

//console.log("java" - "Script")//NaN -> Not a number
// what is NaN?
//-> NaN is a property of the global śbject.
// it is a variable in global scope. 

//NaN practice

//NaN === NaN; -> False
//Number.NaN === NaN; -> False
//isNaN(NaN); ->true
//isNaN(Number.log); ->true
//Number.isNaN(NaN); ->true

//var a= 30;
//var b =10;
//console.log(a!==b);

//ternary operator

//var  age=13;
//console.log((18>=age)?"eligible":"not_eligible");

//we hava total 5 falsy values in JS. 
//0,"",undefined,null,NaN,false** is falsy value   
 
//if (score=5){
  //  console.log("ohh lost match");
 //}
 //else{
   // console.log("yheee won the match");
 //}

 //table of 8 
 //var num=1;
 //while (num<=10) {
   // var tableof =8;
    //console.log(tableof +"*" + num +"=" +num*8);
    //num++;
 //}

 //Now  Modern Javascript

 //LET vs CONST(can't change)

//var my_name="pranav"
//console.log(my_name);
//my_name="harsh"
//console.log(my_name)

 //var => Function scope
 //LET and CONST => block scope

//function name(){
  //let myname="pranav"
  //console.log(myname);
  //if(true){
    //let mylastname="Upadhyay"
    //console.log(mylastname);
    //console.log(myname)
  //}
  //console.log(mylastname);
//}

// template litrals
// for(let i=1;i<=10;i++){
  //let tableof=12;
  //console.log (`${tableof} * ${i} = ${tableof*i}`);
 //}
// fat arrow function 
//const sum = () =>{
  //let a=4; b=5;
  //return a+b;
//}
//console.log(sum());

//Array

//var a1= new Array;
 //var a1 = ['pranav',3,43,'radhe'];
 //console.log(a1[2]);

// if we want  to  check the length
//console.log(a1.length);
//console.log(a1[a1.length-1]);

//perform CURD

//let  arr1=['pranav','upadhyay','sachin','rohit'];
//var count=arr1.push('virat')
//console.log(arr1)
//console.log(count)

//let  arr1=['pranav','upadhyay','sachin','rohit'];
//var count=arr1.unshift('virat')
//console.log(arr1)
//console.log(count)

//let arr1=['carrot','brocali','cabbage','potato']
//var count=arr1.pop()
//console.log(arr1);
//console.log(count);

//let arr1=['carrot','brocali','cabbage','potato']
//var count=arr1.shift()
//console.log(arr1);
//console.log(count);

//let arr1=['april','oct','march','sept']
//var count = arr1.splice(arr1.lemgth,0,'March')
//var idx=arr1.indexOf('march')
//if(idx!=-1){
  //var count = arr1.splice(idx,1);
//}else{
  //console.log("element not found");
//}
//console.log(arr1);
//console.log(count);
  
//let arr1 = [1,2,3,4,5]
//console.log(arr1.find(ele => ele%2==0));

//let arr1 = [1,2,3,4,5]
//var idx=arr1.findIndex(ele => ele%2==0);
//console.log(idx);

//let arr1 =[2,4,6,8];
//let newarr=arr1.map((currele,index,arr) => currele*2 ).filter((currele,index,arr) => currele > 6).reduce((Accumulator,currele,index,arr) => Accumulator*=currele );
//console.log(newarr);

//let anystring="we are so called\"viking\"from the north."
//console.log(anystring);
//let str1="banana,mango,kiwi,kite"
//var idx=str1.indexOf("k",15);
//console.log(idx);

//let str1="banana,mango,kiwi,kite"
//var idx=str1.lastIndexOf("k",15);
//console.log(idx);

//let str1="robot,cow,dog,cat"
//console.log(str1.search("cow"));
//let str=str1.slice(0,4);
//console.log(str);
//console.log(str1);

//console.log(str1.substr(2,6));
//var str2=str1.replace("cat","chicken");
//console.log(str2); 

///date and time

var d= new Date()
console.log(d)

var d= new Date().toLocaleString()
console.log(d)

var d= new Date().toString()
console.log(d)

var d= new Date("july 01,2023 14:23:32").toString()
console.log(d)

console.log(Date.now())

let currdate = new Date();

console.log(currdate.getFullYear())
console.log(currdate.getMonth())
console.log(currdate.getDate())
console.log(currdate.getDay())

console.log(currdate.setFullYear(2002))
console.log(currdate.setMonth(0))
console.log(currdate.setDate(4))
