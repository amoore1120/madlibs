function createParagraph() {
    var wordOne = document.getElementById("verb").value;
    var wordTwo = document.getElementById("feeling").value;
    var wordThree = document.getElementById("adj1").value;
    var wordFour = document.getElementById("adj2").value;
    var wordFive = document.getElementById("noun").value;
    var wordSix = document.getElementById("flavor").value;
    var wordSeven = document.getElementById("food").value;
    var wordEight = document.getElementById("read").value;
    var wordNine = document.getElementById("adj3").value;
    var wordTen = document.getElementById("adj4").value;
    var wordEleven = document.getElementById("monster").value;

/* (var name) can be the same name as (getElementbyId value) 
     ex - var wordEleven = document.getElementById("wordEleven").value;
    * even though they can be named the same, the best practice is to give them different names so it's easier to follow the code. If someone else is reading the code it would be difficult for them to follow along  
*/
    var paragraph = '<p>Do not ' + '<span class="highlight">' + wordOne + '</span>' + ' to me before I have had my coffee! Before I get my first sip, I am ' + '<span class="highlight">' + wordTwo + '</span>' + '. If I do not get to practice my morning routine, then the day is sure to be ' + '<span class="highlight">' + wordThree + '</span>' + '. First, I get my ' + '<span class="highlight">' + wordFour +'</span>' + ' ' + '<span class="highlight">' +  wordFive + '</span>' + ' mug. Then, I brew some ' + '<span class="highlight">' + wordSix + '</span>' + ' coffee. Next, I mix in ' + '<span class="highlight">' + wordSeven + '</span>' + '. I enjoy drinking this coffee while reading ' + '<span class="highlight">' + wordEight + '</span>' + '. Once the ritual is complete, I feel ' + '<span class="highlight">' + wordNine + '</span>' + '. When I miss my java break, I turn into a ' + '<span class="highlight">' + wordTen + '</span>' + ' ' + '<span class="highlight">' + wordEleven + '</span>' + '.</p>';

    document.getElementById('answer').innerHTML = paragraph; 
}
/*  input values
    _1_verb_
    _2_type_of_feeling__
    _3_adjective__
    _4_adjective__
    _5_noun__
    _6_flavor__
    _7_type_of_food_
    _8_something_you_read__
    _9_adjective__
    _10_adjective__
    _11_type_of_monster__

    paragraph
    Do not ___1___ to me before I have had my coffee! Before I get my first sip, I am ___2___. If I do not get to practice my morning routine, then the day is sure to be ___3___. First, I get my ___4___ ___5___ mug. Then, I brew some ___6___ coffee. Next, I mix in ___7__. I enjoy drinking this coffee while reading ___8___. Once the ritual is complete, I feel ___9___. When I miss my java break, I turn into a ___10___ ___11___.
*/





/*      POSSIBLE SOLUTION TO THE REQUIRED ATTRIBUTE  ON HTML INPUT FIELD NOT WORKING

*       MORE INFO IN READ ME

function createParagraph() {
    var verbInput = document.getElementById('verb');
    var feelingInput = document.getElementById('feeling');
    var adj1Input = document.getElementById('adj1');
    var adj2Input = document.getElementById('adj2');
    var nounInput = document.getElementById('noun');
    var flavorInput = document.getElementById('flavor');
    var foodInput = document.getElementById('food');
    var readInput = document.getElementById('read');
    var adj3Input = document.getElementById('adj3');
    var adj4Input = document.getElementById('adj4');
    var monsterInput = document.getElementById('monster');

    if (!verbInput.value) {
        verbInput.setCustomValidity('Please enter a verb.');
        verbInput.reportValidity();
        return;
    }

    if (!feelingInput.value) {
        feelingInput.setCustomValidity('Please enter a type of feeling.');
        feelingInput.reportValidity();
        return;
    }

    if (!adj1Input.value) {
        adj1Input.setCustomValidity('Please enter an adjective.');
        adj1Input.reportValidity();
        return;
    }

    if (!adj2Input.value) {
        adj2Input.setCustomValidity('Please enter an adjective.');
        adj2Input.reportValidity();
        return;
    }

    if (!nounInput.value) {
        nounInput.setCustomValidity('Please enter a noun.');
        nounInput.reportValidity();
        return;
    }

    if (!flavorInput.value) {
        flavorInput.setCustomValidity('Please enter a flavor.');
        flavorInput.reportValidity();
        return;
    }

    if (!foodInput.value) {
        foodInput.setCustomValidity('Please enter a type of food.');
        foodInput.reportValidity();
        return;
    }

    if (!readInput.value) {
        readInput.setCustomValidity('Please enter something you read.');
        readInput.reportValidity();
        return;
    }

    if (!adj3Input.value) {
        adj3Input.setCustomValidity('Please enter an adjective.');
        adj3Input.reportValidity();
        return;
    }

    if (!adj4Input.value) {
        adj4Input.setCustomValidity('Please enter an adjective.');
        adj4Input.reportValidity();
        return;
    }

    if (!monsterInput.value) {
        monsterInput.setCustomValidity('Please enter a type of monster.');
        monsterInput.reportValidity();
        return;
    }

    var paragraph = '<p>Do not ' + '<span class="highlight">' + verbInput.value + '</span>' + ' to me before I have had my coffee! Before I get my first sip, I am ' + '<span class="highlight">' + feelingInput.value + '</span>' + '. If I do not get to practice my morning routine, then the day is sure to be ' + '<span class="highlight">' + adj1Input.value + '</span>' + '. First, I get my ' + '<span class="highlight">' + adj2Input.value + '</span>' + ' ' + '<span class="highlight">' + nounInput.value + '</span>' + ' mug. Then, I brew some ' + '<span class="highlight">' + flavorInput.value + '</span>' + ' coffee. Next, I mix in ' + '<span class="highlight">' + foodInput.value + '</span>' + '. I enjoy drinking this coffee while reading ' + '<span class="highlight">' + readInput.value + '</span>' + '. Once the ritual is complete, I feel ' + '<span class="highlight">' + adj3Input.value + '</span>' + '. When I miss my java break, I turn into a ' + '<span class
*/