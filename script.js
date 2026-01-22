


//while(condition)
//i=1;
//do{
  //  console.log('do..while');
//}while(i===0);

//find even number
//for(let i=1;i<=10;i++){
  //  if(i%2===0) console.log(i);
//}
//i=9;
//if(i%2===0) console.log("even");
//else console.log("odd");
//let mark = 90;
//if (mark>=90) console.log("O grade");
//else if(mark>=80) console.log("A grade");
//else if(mark>=70) console.log("B grade");
//else console.log("fail");


//switch
//let day = 6;
//switch(day){
  //  case 1: {console.log("sunday");
    //break;
    //}
   /* case 2:{ console.log("monday");
    break;
    }    
    case 3: {console.log("tuesday");
    break;
    }
    case 4:{ console.log("wednesday");
    break;
    }
    //case 5: {console.log("thursday");
    //break;
    }
    case 6:{ console.log("friday");
    break;
    //}
    //case 7: {console.log("saturday");
       // break;
    //}
   // case 8:{console.log("invalid input");
       // break;
   // }
//}*/

//ternary operator
//if condition is true it shows even if condition is false it shows odd
/*i=8;
let result = (i%2==0)?"even":"odd";
console.log(result);

i=67;
let grade =(i>=80)?"A":"B"
console.log(grade);*/

/*mark=15;
let result=(mark>=90)?"o garde":(mark>=80)?"A garde":(mark>=70)?"B garde":(mark>=35)?"p":"f";
console.log(result);*/

/*function and method:
method:we call method by its name and it is inside the class
function :we call method by its name 

writing a method */
/*add(10,20)
function add(a,b){
    console.log(a+b);
}

//arrow function
var add =(a,b)=>{
    console.log(a+b);
}
add(10,20);*/

//spread operator
/*var arr1=[10,20,30]
var arr2=[40,50,60]
var arr3=[...arr1,...arr2];
console.log(arr3);
//destructuring operator
var [m1,m2,m3,m4,m5]=[98,87,90,78,65]
console.log(m1);
console.log(m2);
console.log(m3);
console.log(m4);
console.log(m5);*/
var {name,age,dept,marks}={
  name:"triveni",
  age:19,
  dept:"csc", //dept:["cs","da"]
  marks:{
    java:100,
    c:90,
    mern:98
  }
}
console.log(name);
console.log(age);
console.log(dept);
console.log(marks);

