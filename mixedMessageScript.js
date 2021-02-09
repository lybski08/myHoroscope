const myHoroscope ={
    love: ['Be aware to new people you may meet. You never know, you might be surprised','The heart wants what the heart wants. No need to fight it','Be cautious, your current relationship is fragile. Try to preserve it better.'],
    money: ['Uh uh! If you have it, you can spend it. You are not taking it to the grave either way.','The fortune that you have is at risk. Be cautious in your investments.', 'Be patient. There is a good investment nearby. It could be life changer.'],
    health: ['You have a strong heart. Keep active. Nothing can break you down.', 'You kinda have to be cautious. You are not getting any younger.', 'DANGER! Your immune system is very low. Be extra carefull'],
    myLoveTeller(){
       var setRandomNumber = Math.floor(Math.random() *myHoroscope.love.length);
       console.log(myHoroscope.love[setRandomNumber]);
    },
    myHealthPrediction(){
        var setRandomNumber = Math.floor(Math.random() *myHoroscope.health.length);
        console.log(myHoroscope.health[setRandomNumber]);
    },
    myInvestmentGuesser(){
        var setRandomNumber = Math.floor(Math.random() *myHoroscope.money.length);
        console.log(myHoroscope.money[setRandomNumber]);
    }
};

console.log('Your horoscope for today on the matter of love: ') + myHoroscope.myLoveTeller();
console.log('Your horoscope for today on the matter of health: ') + myHoroscope.myHealthPrediction();
console.log('Your horoscope for today on the matter of economy: ') + myHoroscope.myInvestmentGuesser();

