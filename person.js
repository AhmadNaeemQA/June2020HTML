class Person {

    constructor(name, gender, age, intrests, bio) {
        this._name = name;
        this._gender = gender;
        this._age = age;
        this._intrests = intrests;
        this._bio = bio;
    }

    greeting() {
        console.log(`Hello`)
    }



}

class Teacher extends Person {

    constructor(name, gender, age, intrests, bio) {
        super(name, gender, age, intrests, bio)
    }

    greeting() {
        console.log(`Hello my name is ${this._name} and I am a teacher.`)
    }
}

class Student extends Person {

    constructor(name, gender, age, intrests, bio) {
        super(name, gender, age, intrests, bio)
    }

    greeting() {
        console.log(`Hello my name is ${this._name} and I am a student.`)
    }
}

let teacher1 = new Teacher('Mr Smith', 'male', 28, 'football', 'experainced teacher');
teacher1.greeting();