let question = '';
let buttonOne = false;
let buttonTwo = false;
let buttonThree = false;
let buttonFour = false;

function falseChoices() {
    let buttonOne = false;
    let buttonTwo = false;
    let buttonThree = false;
    let buttonFour = false;
}

function button1() {
    falseChoices()
    buttonOne = true;
    answerSubmission();
}

function button2() {
    falseChoices()
    buttonTwo = true;
    answerSubmission();
}

function button3() {
    falseChoices()
    buttonThree = true;
    answerSubmission();
}

function button4() {
    falseChoices()
    buttonFour = true;
    answerSubmission();
}

function randomQuestion1() {
    let random = Math.floor(Math.random() * 20 + 1);

    if (random === 20) {
        question = 'Hydrogen';
    } else if (random === 19) {
        question = 'Helium';
    } else if (random === 18) {
        question = 'Lithium';
    } else if (random === 17) {
        question = 'Beryllium';
    } else if (random === 16) {
        question = 'Boron';
    } else if (random === 15) {
        question = 'Carbon';
    } else if (random === 14) {
        question = 'Nitrogen';
    } else if (random === 13) {
        question = 'Oxygen';
    } else if (random === 12) {
        question = 'Fluorine';
    } else if (random === 11) {
        question = 'Neon';
    } else if (random === 10) {
        question = 'Sodium';
    } else if (random === 9) {
        question = 'Magnesium';
    } else if (random === 8) {
        question = 'Aluminum';
    } else if (random === 7) {
        question = 'Silicon';
    } else if (random === 6) {
        question = 'Phosphorus';
    } else if (random === 5) {
        question = 'Sulfur';
    } else if (random === 4) {
        question = 'Chlorine';
    } else if (random === 3) {
        question = 'Argon';
    } else if (random === 2) {
        question = 'Potassium';
    } else if (random === 1) {
        question = 'Calcium';
    }
}

function randomQuestion2() {
    let random = Math.floor(Math.random() * 20 + 1);

    if (random === 20) {
        answer = 'H';
    } else if (random === 19) {
        answer = 'He';
    } else if (random === 18) {
        answer = 'Li';
    } else if (random === 17) {
        answer = 'Be';
    } else if (random === 16) {
        answer = 'B';
    } else if (random === 15) {
        answer = 'C';
    } else if (random === 14) {
        answer = 'N';
    } else if (random === 13) {
        answer = 'O';
    } else if (random === 12) {
        answer = 'F';
    } else if (random === 11) {
        answer = 'Ne';
    } else if (random === 10) {
        answer = 'Na';
    } else if (random === 9) {
        answer = 'Mg';
    } else if (random === 8) {
        answer = 'Al';
    } else if (random === 7) {
        answer = 'Si';
    } else if (random === 6) {
        answer = 'P';
    } else if (random === 5) {
        answer = 'S';
    } else if (random === 4) {
        answer = 'Cl';
    } else if (random === 3) {
        answer = 'Ar';
    } else if (random === 2) {
        answer = 'K';
    } else if (random === 1) {
        answer = 'Ca';
    }
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

    if (buttonOne === true) {
        randomQuestion1();

        let answer = prompt(question, '');

        if (question === 'Hydrogen' && answer === 'H') {
            alert('correct');
        } else if (question === 'Helium' && answer === 'He') {
            alert('correct');
        } else if (question === 'Lithium' && answer === 'Li') {
            alert('correct');
        } else if (question === 'Beryllium' && answer === 'Be') {
            alert('correct');
        } else if (question === 'Boron' && answer === 'B') {
            alert('correct');
        } else if (question === 'Carbon' && answer === 'C') {
            alert('correct');
        }  else if (question === 'Nitrogen' && answer === 'N') {
            alert('correct');
        } else if (question === 'Oxygen' && answer === 'O') {
            alert('correct');
        } else if (question === 'Fluorine' && answer === 'F') {
            alert('correct');
        } else if (question === 'Neon' && answer === 'Ne') {
            alert('correct');
        } else if (question === 'Sodium' && answer === 'Na') {
            alert('correct');
        } else if (question === 'Magnesium' && answer === 'Mg') {
            alert('correct');
        } else if (question === 'Aluminum' && answer === 'Al') {
            alert('correct');
        } else if (question === 'Silicon' && answer === 'Si') {
            alert('correct');
        } else if (question === 'Phosphorus' && answer === 'P') {
            alert('correct');
        } else if (question === 'Sulfur' && answer === 'S') {
            alert('correct');
        } else if (question === 'Chlorine' && answer === 'Cl') {
            alert('correct');
        } else if (question === 'Argon' && answer === 'Ar') {
            alert('correct');
        } else if (question === 'Potassium' && answer === 'K') {
            alert('correct');
        } else if (question === 'Calcium' && answer === 'Ca') {
            alert('correct');
        } else {
            alert('wrong')
        }
    } else if (buttonTwo === true) {
        randomQuestion2();

        let question = prompt(answer, '');

        if (question === 'Hydrogen' && answer === 'H') {
            alert('correct');
        } else if (question === 'Helium' && answer === 'He') {
            alert('correct');
        } else if (question === 'Lithium' && answer === 'Li') {
            alert('correct');
        } else if (question === 'Beryllium' && answer === 'Be') {
            alert('correct');
        } else if (question === 'Boron' && answer === 'B') {
            alert('correct');
        } else if (question === 'Carbon' && answer === 'C') {
            alert('correct');
        }  else if (question === 'Nitrogen' && answer === 'N') {
            alert('correct');
        } else if (question === 'Oxygen' && answer === 'O') {
            alert('correct');
        } else if (question === 'Fluorine' && answer === 'F') {
            alert('correct');
        } else if (question === 'Neon' && answer === 'Ne') {
            alert('correct');
        } else if (question === 'Sodium' && answer === 'Na') {
            alert('correct');
        } else if (question === 'Magnesium' && answer === 'Mg') {
            alert('correct');
        } else if (question === 'Aluminum' && answer === 'Al') {
            alert('correct');
        } else if (question === 'Silicon' && answer === 'Si') {
            alert('correct');
        } else if (question === 'Phosphorus' && answer === 'P') {
            alert('correct');
        } else if (question === 'Sulfur' && answer === 'S') {
            alert('correct');
        } else if (question === 'Chlorine' && answer === 'Cl') {
            alert('correct');
        } else if (question === 'Argon' && answer === 'Ar') {
            alert('correct');
        } else if (question === 'Potassium' && answer === 'K') {
            alert('correct');
        } else if (question === 'Calcium' && answer === 'Ca') {
            alert('correct');
        } else {
            alert('wrong')
        }
    } else if (buttonThree === true) {
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
