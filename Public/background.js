// chrome.app.runtime.onLaunched.addListener(function() {
//     chrome.app.window.create('index.html', {
//         'outerBounds': {
//             'width': 400,
//             'height': 500
//         }
//     });
// });

const airhorn = new Audio('../audios/airhorn.mp3');
const anotherOne = new Audio('../audios/anotherone.mp3');
const burn = new Audio('../audios/oh.mp3');
const fart = new Audio('../audios/fart2.mp3');
const weTheBest = new Audio('../audios/wethebest.mp3');

function playSound(sound) {
    if(sound.currentTime > 0){
        sound.currentTime = 0;
    }
    if(sound.currentTime == 0){
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
});
