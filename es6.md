### 1.let、const和block作用域

```
var a = 2;
{
  let a = 3;
  console.log(a);
}
console.log(a);

```

```
{
  const ARR = [5,6];
  ARR.push(7);
  console.log(ARR);
  ARR = 10;
}
```
### 2.箭头函数（Arrow Functions）

var getPrice = () => 4.5;

var getReducePrice = (x=0.6) => x * 40;



let arr = ['apple','banana','orange'];

arr.map(fruit => fruit+'s')



function Person(){

  this.age = 0;
  setInterval(() => {
    this.age++;
    }, 1000);
}

### 3.函数参数默认值

let getFinalPrice = (price, tax=0.7) => price + price * tax;
getFinalPrice(500);



let containsAll(haystack, ...args){
  for (let arg of args){
    if(arg.indexOf(haystack) === -1){
      return false;
    }else{
      return true;
    }
  }
}






data(){

  return {
    calenda:[
      {
        show:false,
        value:''
      }
    ]
  }
}
