
const bot ={

	name: "You can call me Mr. Chat Bot",
	home: "The Internet is my home",
	madeOf: "I am made of 1s and 0s",
	food: "I eat your data",
	age: "I am ageless",
};

function answerQuestion(question){
	if (question == "What is your name?" || question.includes('name')){
		console.log(bot.name);
	} else if (question == "Where are you from?" || question.includes('home') || question.includes('from')){
		console.log(bot.home);
	} else if (question == "What are you made of?" || question.includes('made')){
		console.log(bot.madeOf);
	} else if (question == "What do you eat?" || question.includes('eat') || question.includes('food')){
		console.log(bot.food);
	} else if (question == "How old are you?" || question.includes('age') || question.includes('old')){
		console.log(bot.age);
	}
	else {
		console.log("I'm sorry. I don't understand your question.");
	}
}


