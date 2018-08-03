const airhorn = new Audio('../audios/airhorn.mp3');
const anotherOne = new Audio('../audios/anotherone.mp3');
const burn = new Audio('../audios/oh.mp3');
const fart = new Audio('../audios/fart2.mp3');
const weTheBest = new Audio('../audios/wethebest.mp3');
const makeitso = new Audio('../audios/makeitso.mp3');
const johnCena = new Audio('../audios/johnCena.mp3');
const sthExtraLife = new Audio('../audio/sth_extra_life.mp3');
const cartmanUpset = new Audio('../audio/cartmanUpset.mp3');

function playSound(sound) {
    if(sound.currentTime > 0){
        sound.currentTime = 0;
    }

    if(sound.currentTime === 0){
        sound.play();
    }
}

chrome.runtime.onInstalled.addListener(function() {
    console.log("Extension loaded");
});

chrome.commands.onCommand.addListener(function(command) {
    if(command === 'Airhorn'){
        playSound(airhorn);
    }

    if(command === 'Another_One'){
        playSound(anotherOne);
    }

    if(command === 'Burn'){
        playSound(burn);
    }

    if(command === 'Fart'){
        playSound(fart);
    }

    if(command === 'wethebest'){
        playSound(weTheBest);
    }

    if(command === 'makeitso'){
        playSound(makeitso);
    }

    if(command === 'johnCena'){
        playSound(johnCena);
    }

    if(command === "SonicExtraLife"){
        playSound(sthExtraLife);
    }

    if(command === "cartmanUpset"){
        playSound(cartmanUpset);
    }
});
