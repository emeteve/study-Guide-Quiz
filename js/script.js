let question = '';
let buttonOne = false;
let buttonTwo = false;

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

function button1() {
    buttonOne = true;
    buttonTwo = false;
    answerSubmission();
}

function button2() {
    buttonTwo = true;
    buttonOne = false;
    answerSubmission();
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
    }
}

let guide = {
    Hydrogen: 'H',
    Helium: 'He',
    Lithium: 'Li',
    Beryllium: 'Be',
    Boron: 'B',
    Carbon: 'C',
    Nitrogen: 'N',
    Oxygen: 'O',
    Fluorine: 'F',
    Neon: 'Ne',
    Sodium: 'Na',
    Magnesium: 'Mg',
    Aluminum: 'Al',
    Silicon: 'Si',
    Phosphorus: 'P',
    Sulfur: 'S',
    Chlorine: 'Cl',
    Argon: 'Ar',
    Potassium: 'K',
    Calcium: 'Ca',
}
