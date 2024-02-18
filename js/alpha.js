function play(){
    // hidden home screen
    const homeSection = document.getElementById('home');
    homeSection.classList.add('hidden');

    // show play ground
    const playGroundSection = document.getElementById('playground');
    playGroundSection.classList.remove('hidden');
    continueGame();
}

function handelKeyboardButtonPress(event){
    const playerPressed = event.key;

    // get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const  expectedAlphabet = currentAlphabet.toLowerCase();


    // check matched or not
    if(playerPressed === expectedAlphabet){
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('game over'); 
    }
}

    // capture keyboard key press
document.addEventListener('keyup', handelKeyboardButtonPress );







function continueGame(){
    const alphabet = getARandomAlphabet();

    // set random alphabet in display
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color
    addBackgroundColorById(alphabet);
}

function getARandomAlphabet(){
    // crate a alphabet string
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    
    
    // get a random number

    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];
    return alphabet;

}


function addBackgroundColorById(elementId) {
   const element = document.getElementById(elementId);
   element.classList.add('bg-warning');
}

function removeBackgroundColorById(elementId) {
   const element = document.getElementById(elementId);
   element.classList.remove('bg-warning');
}