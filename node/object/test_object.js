/*
 要点:
 1 创建的每一个函数都有原型属性，本质是一个指针，指向原型对象 
 2 原型对象包含实例共享的属性和方法

*/

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

// 传统的类有集成的概念，但js采用的是原型继承，无法直接扩展
// 必须借助一个中间对象来实现正确的原型链
// js原型链继承