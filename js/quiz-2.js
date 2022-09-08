let question = '';
let buttonThree = false;
let buttonFour = false;

function falseChoices() {
    buttonThree = false;
    buttonFour = false;
}

function button3() {
    falseChoices();
    buttonThree = true;
    answerSubmission();
}

function button4() {
    falseChoices();
    buttonFour = true;
    answerSubmission();
}

function randomQuestion3() {
    let random = Math.floor(Math.random() * 20 + 1);

    if (random === 20) {
        question = 'Titanium';
    } else if (random === 19) {
        question = 'Chromium';
    } else if (random === 18) {
        question = 'Manganese';
    } else if (random === 17) {
        question = 'Iron';
    } else if (random === 16) {
        question = 'Cobalt';
    } else if (random === 15) {
        question = 'Nickel';
    } else if (random === 14) {
        question = 'Copper';
    } else if (random === 13) {
        question = 'Zinc';
    } else if (random === 12) {
        question = 'Arsenic';
    } else if (random === 11) {
        question = 'Selenium';
    } else if (random === 10) {
        question = 'Bromine';
    } else if (random === 9) {
        question = 'Krypton';
    } else if (random === 8) {
        question = 'Rubidium';
    } else if (random === 7) {
        question = 'Strontium';
    } else if (random === 6) {
        question = 'Silver';
    } else if (random === 5) {
        question = 'Cadmium';
    } else if (random === 4) {
        question = 'Tin';
    } else if (random === 3) {
        question = 'Antimony';
    } else if (random === 2) {
        question = 'Iodine';
    } else if (random === 1) {
        question = 'Xenon';
    }
}

function randomQuestion4() {
    let random = Math.floor(Math.random() * 20 + 1);

    if (random === 20) {
        answer = 'Ti';
    } else if (random === 19) {
        answer = 'Cr';
    } else if (random === 18) {
        answer = 'Mn';
    } else if (random === 17) {
        answer = 'Fe';
    } else if (random === 16) {
        answer = 'Co';
    } else if (random === 15) {
        answer = 'Ni';
    } else if (random === 14) {
        answer = 'Cu';
    } else if (random === 13) {
        answer = 'Zn';
    } else if (random === 12) {
        answer = 'As';
    } else if (random === 11) {
        answer = 'Se';
    } else if (random === 10) {
        answer = 'Br';
    } else if (random === 9) {
        answer = 'Kr';
    } else if (random === 8) {
        answer = 'Rb';
    } else if (random === 7) {
        answer = 'Sr';
    } else if (random === 6) {
        answer = 'Ag';
    } else if (random === 5) {
        answer = 'Cd';
    } else if (random === 4) {
        answer = 'Sn';
    } else if (random === 3) {
        answer = 'Sb';
    } else if (random === 2) {
        answer = 'I';
    } else if (random === 1) {
        answer = 'Xe';
    }
}

function answerSubmission() {

    if (buttonThree === true) {
        randomQuestion3();

        let answer = prompt(question, '');

        if (question === 'Titanium' && answer === 'Ti') {
            alert('correct');
        } else if (question === 'Chromium' && answer === 'Cr') {
            alert('correct');
        } else if (question === 'Manganese' && answer === 'Mn') {
            alert('correct');
        } else if (question === 'Iron' && answer === 'Fe') {
            alert('correct');
        } else if (question === 'Cobalt' && answer === 'Co') {
            alert('correct');
        } else if (question === 'Nickel' && answer === 'Ni') {
            alert('correct');
        }  else if (question === 'Copper' && answer === 'Cu') {
            alert('correct');
        } else if (question === 'Zinc' && answer === 'Zn') {
            alert('correct');
        } else if (question === 'Arsenic' && answer === 'As') {
            alert('correct');
        } else if (question === 'Selenium' && answer === 'Se') {
            alert('correct');
        } else if (question === 'Bromine' && answer === 'Br') {
            alert('correct');
        } else if (question === 'Krypton' && answer === 'Kr') {
            alert('correct');
        } else if (question === 'Rubidium' && answer === 'Rb') {
            alert('correct');
        } else if (question === 'Strontium' && answer === 'Sr') {
            alert('correct');
        } else if (question === 'Silver' && answer === 'Ag') {
            alert('correct');
        } else if (question === 'Cadmium' && answer === 'Cd') {
            alert('correct');
        } else if (question === 'Tin' && answer === 'Sn') {
            alert('correct');
        } else if (question === 'Antimony' && answer === 'Sb') {
            alert('correct');
        } else if (question === 'Iodine' && answer === 'I') {
            alert('correct');
        } else if (question === 'Xenon' && answer === 'Xe') {
            alert('correct');
        } else {
            alert('wrong')
        }
    } else if (buttonFour === true) {
        randomQuestion4();

        let question = prompt(answer, '');

        if (question === 'Titanium' && answer === 'Ti') {
            alert('correct');
        } else if (question === 'Chromium' && answer === 'Cr') {
            alert('correct');
        } else if (question === 'Manganese' && answer === 'Mn') {
            alert('correct');
        } else if (question === 'Iron' && answer === 'Fe') {
            alert('correct');
        } else if (question === 'Cobalt' && answer === 'Co') {
            alert('correct');
        } else if (question === 'Nickel' && answer === 'Ni') {
            alert('correct');
        }  else if (question === 'Copper' && answer === 'Cu') {
            alert('correct');
        } else if (question === 'Zinc' && answer === 'Zn') {
            alert('correct');
        } else if (question === 'Arsenic' && answer === 'As') {
            alert('correct');
        } else if (question === 'Selenium' && answer === 'Se') {
            alert('correct');
        } else if (question === 'Bromine' && answer === 'Br') {
            alert('correct');
        } else if (question === 'Krypton' && answer === 'Kr') {
            alert('correct');
        } else if (question === 'Rubidium' && answer === 'Rb') {
            alert('correct');
        } else if (question === 'Strontium' && answer === 'Sr') {
            alert('correct');
        } else if (question === 'Silver' && answer === 'Ag') {
            alert('correct');
        } else if (question === 'Cadmium' && answer === 'Cd') {
            alert('correct');
        } else if (question === 'Tin' && answer === 'Sn') {
            alert('correct');
        } else if (question === 'Antimony' && answer === 'Sb') {
            alert('correct');
        } else if (question === 'Iodine' && answer === 'I') {
            alert('correct');
        } else if (question === 'Xenon' && answer === 'Xe') {
            alert('correct');
        } else {
            alert('wrong')
        }
    }
}
