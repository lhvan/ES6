ReactDOM.render(
  <h2>Le hong van</h2>
  , document.getElementById('root')
);

class Person {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  sayHello(){
    return 'Hello, I am '+this.name+', I am '+this.age+' years old.';
  }
}
class Child extends Person {
  constructor(name, age, hobby){
    super(name,age);
    this.hobby = hobby;
  }
  sayHello(){
    return 'hihihi, I am '+this.name+', I am '+this.age+' years old. My hobbies is '+this.hobby +' !!';
  }
}
var p1 = new Person('Van',2);
var child = new Child('Ut', 10, 'shopping');
console.log(child.sayHello());
