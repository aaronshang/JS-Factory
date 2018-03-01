'use strict'

//array 对象
var arr = [1,2,3];

console.log(arr[2]);

//创建对象，使用{...} or [...] 或者采用构造函数的方法来创建对象
function Student(name){
    this.name = name;
    this.hello = function(){
        console.log('Hello:'+this.name);
    }
}

//看起来是一个普通函数，也是一个对象，用new来创建

//xiaoming的原型是 函数Student的原型；
var xiaoming = new Student('xiaoming');
console.log(xiaoming.name);
xiaoming.hello();
