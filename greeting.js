let currentDate = new Date();
module.exports.date = currentDate;

module.exports.name = "Alice";

module.exports.getMessage = function(name){
	let hour = currentDate.getHours();
	if(hour > 16){
		return 'Добрий вечір,' + name;
	}else if(hour > 10){
		return 'Добрий день,' + name;
	}else{
		return 'Добрий ранок,' + name;
	}
}