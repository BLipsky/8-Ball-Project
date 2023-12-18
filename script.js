function shakeMagic8Ball() {

    const question = prompt("Ask the Pyramid of Knowledge your question. Don't waist It's time.");

    if (question === null) {
        document.getElementById('response-text').innerText = 'Ask Me the question.'
        document.getElementById('response-text').classList = 'Display-4 innerText'
    }

    if (!question.trim()) {
        alert('You better not be waisting My time.')
        return
    }

    const randomNumber = Math.floor(Math.random() * 16);

    let answer, color;

    switch (randomNumber) {
        case 0:
            answer = "Yes.";
            color = "text-dark"
            break;
        case 1:
            answer = "No.";
            color = "text-dark"
            break;
        case 2:
            answer = "Never Ask that Again.";
            color = "text-dark"
            break;
        case 3:
            answer = "You may enter for asking such a knowledgeable question.";
            color = "text-dark"
            break;
        case 4:
            answer = "Try engraving again.";
            color = "text-dark"
            break;
        case 5:
            answer = "No. Leave.";
            color = "text-dark"
            break;
        case 6:
            answer = "The Sun Gods say it is not probable.";
            color = "text-dark"
            break;
        case 7:
            answer = "It is not likely.";
            color = "text-dark"
            break;
        case 8:
            answer = "Perhaps you overthought that.";
            color = "text-dark"
            break;
        case 9:
            answer = "It seems so.";
            color = "text-dark"
            break;
        case 10:
            answer = "My engravings point to yes.";
            color = "text-dark"
            break;
        case 11:
            answer = "I say... NO.";
            color = "text-dark"
            break;
        case 12:
            answer = "All markings say no.";
            color = "text-dark"
            break;
        case 13:
            answer = "Each brick of my construction agrees with the answer yes.";
            color = "text-dark"
            break;
        case 14:
            answer = "It seems more than likely.";
            color = "text-dark"
            break;
        case 15:
            answer = "Speak again.";
            color = "text-dark"
            break;
    }

    const responseText = document.getElementById('response-text')
    responseText.innerText = answer
    responseText.classList = `display-4 ${color}`
    document.getElementById('response-image').src = image












}
