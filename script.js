///////////////////////////////////////////////////////////////////////////////////////
//This uses my textHack jQuery plugin available at https://github.com/dburrell/textHack
///////////////////////////////////////////////////////////////////////////////////////
var letterSwitchCount = 5;
var delay = 40;

$("#div1").textHack({ initialDelay: 0,    delayBetweenChars: delay, charIterations: letterSwitchCount});
$("#div2").textHack({ initialDelay: 500,  delayBetweenChars: delay, charIterations: letterSwitchCount});
$("#div3").textHack({ initialDelay: 1000, delayBetweenChars: delay, charIterations: letterSwitchCount});
$("#div4").textHack({ initialDelay: 2000, delayBetweenChars: delay, charIterations: letterSwitchCount});
$("#div5").textHack({ initialDelay: 2000, delayBetweenChars: delay, charIterations: letterSwitchCount});