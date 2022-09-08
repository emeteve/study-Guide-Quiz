let question = '';
let buttonFive = false;
let buttonSix = false;

function falseChoices() {
    buttonFive = false;
    buttonSix = false;
}

function button5() {
    falseChoices();
    buttonFive = true;
    answerSubmission();
}

function button6() {
    falseChoices();
    buttonSix = true;
    answerSubmission();
}

function randomQuestion5() {
    let random = Math.floor(Math.random() * 20 + 1);

    if (random === 20) {
        question = 'Cesium';
    } else if (random === 19) {
        question = 'Barium';
    } else if (random === 18) {
        question = 'Tungsten';
    } else if (random === 17) {
        question = 'Platinum';
    } else if (random === 16) {
        question = 'Gold';
    } else if (random === 15) {
        question = 'Mercury';
    } else if (random === 14) {
        question = 'Lead';
    } else if (random === 13) {
        question = 'Bismuth';
    } else if (random === 12) {
        question = 'Radon';
    } else if (random === 11) {
        question = 'Francium';
    } else if (random === 10) {
        question = 'Radium';
    } else if (random === 9) {
        question = 'Cerium';
    } else if (random === 8) {
        question = 'Uranium';
    } else if (random === 7) {
        question = 'Plutonium';
    } else if (random === 6) {
        question = 'Einsteinium';
    } else if (random === 5) {
        question = 'Molybdenum';
    } else if (random === 4) {
        question = 'Hafnium';
    } else if (random === 3) {
        question = 'Thallium';
    } else if (random === 2) {
        question = 'Polonium';
    } else if (random === 1) {
        question = 'Americium';
    }
}

function randomQuestion6() {
    let random = Math.floor(Math.random() * 20 + 1);

    if (random === 20) {
        answer = 'Cs';
    } else if (random === 19) {
        answer = 'Ba';
    } else if (random === 18) {
        answer = 'W';
    } else if (random === 17) {
        answer = 'Pt';
    } else if (random === 16) {
        answer = 'Au';
    } else if (random === 15) {
        answer = 'Hg';
    } else if (random === 14) {
        answer = 'Pb';
    } else if (random === 13) {
        answer = 'Bi';
    } else if (random === 12) {
        answer = 'Rn';
    } else if (random === 11) {
        answer = 'Fr';
    } else if (random === 10) {
        answer = 'Ra';
    } else if (random === 9) {
        answer = 'Ce';
    } else if (random === 8) {
        answer = 'U';
    } else if (random === 7) {
        answer = 'Pu';
    } else if (random === 6) {
        answer = 'Es';
    } else if (random === 5) {
        answer = 'Mo';
    } else if (random === 4) {
        answer = 'Hf';
    } else if (random === 3) {
        answer = 'Tl';
    } else if (random === 2) {
        answer = 'Po';
    } else if (random === 1) {
        answer = 'Am';
    }
}

function answerSubmission() {

    if (buttonFive === true) {
        randomQuestion5();

        let answer = prompt(question, '');

        if (question === 'Cesium' && answer === 'Cs') {
            alert('correct');
        } else if (question === 'Barium' && answer === 'Ba') {
            alert('correct');
        } else if (question === 'Tungsten' && answer === 'W') {
            alert('correct');
        } else if (question === 'Platinum' && answer === 'Pt') {
            alert('correct');
        } else if (question === 'Gold' && answer === 'Au') {
            alert('correct');
        } else if (question === 'Mercury' && answer === 'Hg') {
            alert('correct');
        }  else if (question === 'Lead' && answer === 'Pb') {
            alert('correct');
        } else if (question === 'Bismuth' && answer === 'Bi') {
            alert('correct');
        } else if (question === 'Radon' && answer === 'Rn') {
            alert('correct');
        } else if (question === 'Francium' && answer === 'Fr') {
            alert('correct');
        } else if (question === 'Radium' && answer === 'Ra') {
            alert('correct');
        } else if (question === 'Cerium' && answer === 'Ce') {
            alert('correct');
        } else if (question === 'Uranium' && answer === 'U') {
            alert('correct');
        } else if (question === 'Plutonium' && answer === 'Pu') {
            alert('correct');
        } else if (question === 'Einsteinium' && answer === 'Es') {
            alert('correct');
        } else if (question === 'Molybdenum' && answer === 'Mo') {
            alert('correct');
        } else if (question === 'Hafnium' && answer === 'Hf') {
            alert('correct');
        } else if (question === 'Thallium' && answer === 'Tl') {
            alert('correct');
        } else if (question === 'Polonium' && answer === 'Po') {
            alert('correct');
        } else if (question === 'Americium' && answer === 'Am') {
            alert('correct');
        } else {
            alert('wrong')
        }
    } else if (buttonSix === true) {
        randomQuestion6();

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