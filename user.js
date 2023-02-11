function User(name, age){
	this.name = name;
	this.age = age;
	this.displayInfo = function() {
		console.log(`Ім'я ${this.name} Возраст: ${this.age}`);
	}
}
User.prototype.sayHi = function() {
	console.log(`Привіт, мене звати ${this.name}`)
}

module.exports = User;