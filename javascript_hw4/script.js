
// const bot ={

// 	name: "You can call me Mr. Chat Bot",
// 	home: "The Internet is my home",
// 	madeOf: "I am made of 1s and 0s",
// 	food: "I eat your data",
// 	age: "I am ageless",
// };

function answerQuestion(question){

	const bot ={

	name: "You can call me Mr. Chat Bot",
	home: "The Internet is my home",
	madeOf: "I am made of 1s and 0s",
	food: "I eat your data",
	age: "I am ageless",
};


	if (question.toLowerCase().includes('name') || question.toLowerCase().includes('called') || question.toLowerCase().includes('who are you')){
		console.log(bot.name);
	} else if (question.toLowerCase().includes('home') || question.toLowerCase().includes('from')){
		console.log(bot.home);
	} else if (question.toLowerCase().includes('made') || question.toLowerCase().includes('built of')){
		console.log(bot.madeOf);
	} else if (question.toLowerCase().includes('food') || question.toLowerCase().includes('you eat') || question.toLowerCase().includes('eat')){
		console.log(bot.food);
	} else if (question.toLowerCase().includes('age') || question.toLowerCase().includes('old') || question.toLowerCase().includes('been around')){
		console.log(bot.age);
	}
	else {
		console.log("I'm sorry. I don't understand your question.");
	}
}


