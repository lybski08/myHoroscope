# Horoscope Message Generator #

## Introduction ##

The objective of this project is to, everytime someone runs the program, it should get a randomized horoscope-like message.

### How the program works ###

1. First, I created an object, whith a title easily to read and instantly comprehend what is it related to - **_horoscope_**.
2. Then, on the object, I created three distinct properties (love, money and health), that are commonly used in the horoscope that we read everyday.
3. On each property, I defined 3 random sentences as a form of an array.
4. I defined 3 distinct **_methods_** within the object: *myLoveTeller*, *myHealthPrediction* and *myInvestmentGuesser*. These are related to each property of the object.
5. Within each method, I defined a random number, so that after each method the sentence that will provided is completely random. For that I used the math's properties - *Math.random()* and *Math.floor()* - and the *length* property of each object property.
6. Finally, I called each method within the object every time the program runs, so that the result will be completely random. 

## Technologies ##
-Visual Studio Code v1.53.0
-Javascript
-GitHub
