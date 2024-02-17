function play(){
    // hidden home screen
    const homeSection = document.getElementById('home');
    homeSection.classList.add('hidden');

    // show play ground
    const playGroundSection = document.getElementById('playground');
    playGroundSection.classList.remove('hidden');
    continueGame();
}

function continueGame(){
    const alphabet = getARandomAlphabet();

    // set random alphabet in display
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color
    addBgHighLightColor(alphabet);
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


function addBgHighLightColor(elementId) {
   const element = document.getElementById(elementId);
   element.classList.add('bg-warning');
}