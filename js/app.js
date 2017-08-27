/*You will need to refer to the index.html page to complete the exercises below. Using DOM, please make the necessary changes to the website.

Also don't forget to run your live-server for this assignment.*/

//1. Kapiolani Coffee Shop
/*Despite being the cat's meow, Kapiolani Coffee Shop's current rating is n/a. Let's keep the hungry fans happy by changing the current ranking to:

Rating: 5 Stars*/

var coffee = document.getElementById("rating1");
coffee.innerHTML = "Rating: 5 stars";


//2. Sunrise Restaurant
/*No rise and shine for the Sunrise Restaurant, as their price and address needs some serious updating. Bring in some sunshine by changing the price and address to the following:

Price: $$$
Adress: 525 Kapahulu Ave, Honolulu, HI 96815*/

var sunrise = document.getElementById("price2");
sunrise.innerHTML = "Price: $$$";


var sunrise2 = document.getElementById("addy2");
sunrise2.innerHTML = "Address: 525 Kapahulu Ave, Honolulu, HI 96815";






//3. Ramen Nakamura
/*Literally, where did the time go? Ramen Nakamura is missing the hours section! This mistake is timeless.

You will need to create a new div element with an id of "hours3". Inside this div element, give it the following info:

Hours: 6pm - 12am Sun - Sat

Append this div element to the div id "text3"*/

var ramen = document.getElementById("text3");
var ramenaddy = document.createElement("div");
ramenaddy.id = "hours3";
ramenaddy.innerHTML = "Hours: 6pm - 12am Sun - Sat";
ramen.appendChild(ramenaddy);

//4. Kam Bowl
/*Kam Bowl got no spare time to update their info and business is suffering! Help them regain their kingpin status again.

Create a new div element with an id of "price4". Inside this div element, give it the following info:

Price: $$$

Append this element to the div with the id of 
"text4"*/
var textfour = document.getElementById("text4");
var kamBowl = document.createElement("div");
kamBowl.id = "price4";
kamBowl.innerHTML = "Price: $$$";

textfour.appendChild(kamBowl);



/*Create a new div element with an id of "addy4". Inside this div element, give it the following info:

Address: 1620 N. School St, Honolulu, HI 96817

Append this element to the div with the id of 
"text4"*/
var addyfour = document.createElement("div");
addyfour.id = "addy4";
addyfour.innerHTML = "Address: 1620 N. School St, Honolulu, HI 96817";
textfour.appendChild(addyfour);

/*Create a new div element with an id of "hours4". Inside this div element, give it the following info:

Hours: 9am - 10pm Sun - Sat

Append this element to the div with the id of 
"text4"
*/

var hoursfour = document.createElement("div");
hoursfour.id = "hours4";
hoursfour.innerHTML = "Hours: 9am - 10pm Sun - Sat";
textfour.appendChild(hoursfour);

/*Create a paragraph element with an id of "update4". Inside this paragraph element, give it the following info:

I'd leave a blank space for this oxtail soup!

Append this element to the div id of "comment4"*/

var pElement = document.createElement("p");
pElement.innerHTML = "I'd leave a blank space for this oxtail soup!";
var commentfour = document.getElementById("comment4");
commentfour.appendChild(pElement);

//5. The Death Star Cafe
/*The empire strikes back with a new and improved oxtail soup offering. Help the dark side win back customers by executing the following commands:*/

/*Create the div elements with the following id's:

"name5"
"rating5"
"price5"
"addy5"
"hours5"


Add the following info for each specific div id:

name5: 5. The Death Star Cafe
rating5: Rating: 2 Stars
price5: Price: $$
addy5: Address: A galaxy far, far away.
hours5: Hours: We never close.

Append the div elements to the div id "text5"
*/

var one = document.createElement("div");
one.id = "name5";
one.innerHTML = "5. The Death Star Cafe";

var two = document.createElement("div");
two.id = "rating5";
two.innerHTML = "Rating: 2 Stars";

var three = document.createElement("div");
three.id = "price5";
three.innerHTML = "Price: $$";

var four = document.createElement("div");
four.id = "addy5";
four.innerHTML = "Address: A galaxy far, far away.";

var five = document.createElement("div");
five.id = "hours5";
five.innerHTML = "Hours: We never close.";

var divtext5 = document.getElementById("text5");
divtext5.appendChild(one);
divtext5.appendChild(two);
divtext5.appendChild(three);
divtext5.appendChild(four);
divtext5.appendChild(five);
