function People(name,age,sex){
    this.name=name;
    this.age=age;
    this.sex=sex;

}

People.prototype={
    sayHello:function(){
        console.log('我是'+this.name+this.age+this.sex)
    }
}

module.exports=People