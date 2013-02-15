// Author John Cardiff-Winchell
// Date 2/14/2013
// Class Scalable Data Infastructures
//Project 2 -  Picking a place to go out and eat.

// Variables

var fastFood = 1,
	sitDownRestauraunt = 2;
	
var fastFoodArray = ["Mcdonald's", "Taco Bell", "Burger King", "Wendy's", "Rally's"];

var sitDownRestaurauntArray = ["Pizza Hut", "Applebee's", "Tony's", "Don Pablo's", "Bennigan's",];

var question1 = "Do you want to go out for dinner tonight?",
	question2 = "Are you in the mood for fast food or a sit down resturaunt?";
	
	
	
// function asks if I have money. If so, we can go out. If not, I cook.

var doIHaveMoney = function (money)
{
	if (money === true)	
	{
		console.log("Lets go out to eat!");
	}
	else
	{
		console.log("Thats alright, I'll cook something for us.");
	}		
}
 
//This function determines if she wants to go out to dinner.

var doYouWantTo = function (question)
{
 	var result;
	var goOut = true;
	if (goOut = question)
	{
		result = true;
	}
	else
	{
		result = false;
	}
	return outcome;
}

// function decides if we have a baby sitter for our son. 
// If yes we will go out. If not we will only decide fast food.
 
var childCare= function (childWatched)
{
 	var result;
	var babySitter = true;
	
	if (babySitter = childCare)
	{
		result = true;
	}
	else
	{
		result = false;
	}
	return outcome;
}
 
 // function decides if we eat at a fast food or sit down restaurant.
 // If i have $30 or more we will eat at sit down. Less than 30 will be fast food.
 
var whereToEat = function (howMuch)
{
 	var result;
	var sitDown = 26;
	
	if (sitDown <= howMuch)
	{
		result = true;
	}
	else
	{
		result = false;
	}
	return outcome;
}

 // function decides if we have are willing to wait 30 minutes or less to be seated at a restaurant
 // if less than 30 minutes we eat here if more than 30 minutes we eat somewhere else.
 
var wait = function (howLong)
{
 	var result;
	var time = 25;
	
	if (time <= howLong)
	{
		result = true;
	}
	else
	{
		result = false;
	}
	return outcome;
}
		
